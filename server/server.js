require('dotenv').config({ path: require('path').join(__dirname, '.env') });

const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const appointmentsRouter = require('./routes/appointments');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/appointments', appointmentsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

function checkServerEnv() {
  const requiredKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'ADMIN_EMAIL'];
  const missing = requiredKeys.filter((key) => !process.env[key]);

  if (missing.length) {
    console.error('Missing required environment variables in server/.env:', missing.join(', '));
    process.exit(1);
  }
}

async function connectMongoDB() {
  if (!process.env.MONGODB_URI) {
    console.warn('⚠️  MONGODB_URI not set. Form will NOT save data to database.');
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✓ MongoDB connected.');
    return true;
  } catch (error) {
    console.warn('⚠️  MongoDB connection failed. Form will work but data will NOT save.');
    console.warn(`   Error: ${error.message}`);
    return false;
  }
}

async function start() {
  checkServerEnv();
  await connectMongoDB();

  app.listen(PORT, () => {
    console.log(`✓ Backend listening on http://localhost:${PORT}`);
    console.log(`  Open http://localhost:${PORT}/ in your browser to test the form.`);
  });
}

start();
