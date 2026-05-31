const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  contactType: { type: String, required: true, enum: ['personal', 'company'] },
  serviceInterest: { type: String, required: true, trim: true },
  others: { type: String, trim: true, default: '' },
  message: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Appointment', AppointmentSchema);
