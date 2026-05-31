const express = require('express');
const Appointment = require('../models/Appointment');
const { sendAdminNotification, sendUserConfirmation } = require('../lib/mailer');

const router = express.Router();

router.post('/', async (req, res) => {
  const { fullName, email, contactType, serviceInterest, others, message } = req.body;

  if (!fullName || !email || !contactType || !serviceInterest || !message) {
    return res.status(400).json({ error: 'Please complete all required fields.' });
  }

  const normalizedContactType = contactType.toLowerCase();
  if (!['personal', 'company'].includes(normalizedContactType)) {
    return res.status(400).json({ error: 'Contact type must be personal or company.' });
  }

  const newRequest = new Appointment({
    fullName,
    email,
    contactType: normalizedContactType,
    serviceInterest,
    others: others || '',
    message,
  });

  try {
    let savedRequest = null;
    try {
      savedRequest = await newRequest.save();
      console.log('✓ Request saved to MongoDB:', savedRequest._id);
    } catch (dbError) {
      console.warn('⚠️  MongoDB save failed. Creating in-memory request.');
      savedRequest = newRequest;
    }

    let adminEmailOk = false;
    let userEmailOk = false;

    try {
      const adminMailResult = await sendAdminNotification(savedRequest);
      console.log('✓ Admin email sent to:', process.env.ADMIN_EMAIL);
      adminEmailOk = true;
    } catch (mailError) {
      console.error('✗ Admin email failed:', mailError.message);
    }

    try {
      const userMailResult = await sendUserConfirmation(savedRequest);
      console.log('✓ User confirmation email sent to:', email);
      userEmailOk = true;
    } catch (mailError) {
      console.error('✗ User email failed:', mailError.message);
    }

    const message = [
      'Request received',
      savedRequest._id ? '✓ Saved to database' : '⚠️  Database save failed',
      adminEmailOk ? '✓ Admin notified' : '⚠️  Admin email failed',
      userEmailOk ? '✓ Confirmation sent' : '⚠️  Confirmation email failed',
    ].filter(m => m).join('. ');

    return res.status(201).json({
      message: message,
      id: savedRequest._id || 'pending',
      saved: !!savedRequest._id,
      adminEmailSent: adminEmailOk,
      userEmailSent: userEmailOk,
    });
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    return res.status(500).json({ error: error.message || 'Unable to process your request right now.' });
  }
});

module.exports = router;
