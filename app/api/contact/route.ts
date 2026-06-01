import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Validate required fields
    const { name, email, personType, message, service, serviceOther } = data;
    
    if (!name || !email || !personType || !message || !service) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email to admin
    const adminResponse = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ibsenrubayita@gmail.com",
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${personType}</p>
        <p><strong>Service Interest:</strong> ${service}${service === "Other" ? ` - ${serviceOther}` : ""}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (adminResponse.error) {
      console.error("Email sending failed:", adminResponse.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    // Send simple confirmation email to user
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your request",
      html: `
        <h2>Thank you for contacting us</h2>
        <p>We have received your request and will get back to you as soon as possible.</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Thank you for reaching out. We will respond shortly." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
