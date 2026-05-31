# Construction Company Backend

This Express backend receives appointment form submissions, stores them in MongoDB, sends an internal notification email, and sends an automated confirmation email to the user.

## Setup

1. Install dependencies:

   ```bash
   cd server
   npm install
   ```

2. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your MongoDB connection and SMTP details.

## Run

```bash
cd server
npm start
```

## API

- `POST /api/appointments`

Request body:

```json
{
  "fullName": "Jane Doe",
  "email": "jane@example.com",
  "contactType": "personal",
  "serviceInterest": "renovations",
  "others": "Custom kitchen build",
  "message": "I need a quote for a full kitchen remodel."
}
```

The backend saves the request to MongoDB, sends a notification email to `ADMIN_EMAIL`, and sends a confirmation email to the provided user email.

## Public form

Open `http://localhost:4000/` after starting the backend to use the built-in appointment form.
