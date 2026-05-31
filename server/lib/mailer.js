const nodemailer = require('nodemailer');

const requiredMailerKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
const missingMailerKeys = requiredMailerKeys.filter((key) => !process.env[key]);

if (missingMailerKeys.length) {
  throw new Error(`Mailer environment values are not fully configured. Missing: ${missingMailerKeys.join(', ')}. Check server/.env.`);
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function buildAdminMessage(appointment) {
  return {
    from: process.env.SMTP_USER,
    to: process.env.ADMIN_EMAIL,
    subject: `New Appointment Request from ${appointment.fullName}`,
    text: `A new appointment request was submitted:\n\n` +
      `Full Name: ${appointment.fullName}\n` +
      `Email: ${appointment.email}\n` +
      `Contact Type: ${appointment.contactType}\n` +
      `Service Interest: ${appointment.serviceInterest}\n` +
      `Others: ${appointment.others || 'N/A'}\n` +
      `Message:\n${appointment.message}\n` +
      `Submitted At: ${appointment.createdAt.toISOString()}\n`,
  };
}

function buildUserMessage(appointment) {
  return {
    from: process.env.SMTP_USER,
    to: appointment.email,
    subject: 'Your Appointment Request Is Received',
    text: `Hello ${appointment.fullName},\n\n` +
      `Thank you for contacting us. We received your appointment request and will review it shortly. Here is what you submitted:\n\n` +
      `Contact Type: ${appointment.contactType}\n` +
      `Service Interest: ${appointment.serviceInterest}\n` +
      `Others: ${appointment.others || 'N/A'}\n` +
      `Message:\n${appointment.message}\n\n` +
      `If you need to update your request, reply to this message.\n\n` +
      `Best regards,\nConstruction Company Team`,
  };
}

async function sendAdminNotification(appointment) {
  try {
    const mailOptions = buildAdminMessage(appointment);
    const result = await transporter.sendMail(mailOptions);
    return { accepted: result.accepted, messageId: result.messageId };
  } catch (error) {
    console.error('Admin email send error:', error.message);
    throw error;
  }
}

async function sendUserConfirmation(appointment) {
  try {
    const mailOptions = buildUserMessage(appointment);
    const result = await transporter.sendMail(mailOptions);
    return { accepted: result.accepted, messageId: result.messageId };
  } catch (error) {
    console.error('User email send error:', error.message);
    throw error;
  }
}

module.exports = {
  sendAdminNotification,
  sendUserConfirmation,
};
