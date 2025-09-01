import nodemailer from "nodemailer";

// Transporter setup - Config for sending emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Company email (sender)
    pass: process.env.EMAIL_PASS, // App password
  },
});

// Function to send contact form emails
export const sendContactEmail = async (contactData) => {
  const { firstName, lastName, email, phone, company, serviceCategory, message } = contactData;

  // Mail to Admin/Team
  const adminMailOptions = {
    from: process.env.EMAIL_USER, // Sender (company email)
    to: process.env.EMAIL_RECEIVER, // Receiver (team/admin email)
    subject: "New Contact Form Submission - Comcares Website",
    html: `
      <h2>New Contact Submission</h2>
      <p><b>Name:</b> ${firstName} ${lastName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || "N/A"}</p>
      <p><b>Company:</b> ${company || "N/A"}</p>
      <p><b>Service Category:</b> ${serviceCategory || "N/A"}</p>
      <p><b>Message:</b> ${message}</p>
    `,
  };

  // Acknowledgment Mail to User
  const userMailOptions = {
    from: process.env.EMAIL_USER, // Sender (company email)
    to: email, // The user who submitted the form
    subject: "Thank you for contacting Comcares",
    html: `
      <h2>Hi ${firstName},</h2>
      <p>Thank you for reaching out to <b>Comcares Technologies</b>. We have received your message and our team will get back to you shortly.</p>
      <p><b>Your submitted details:</b></p>
      <ul>
        <li><b>Service Category:</b> ${serviceCategory || "N/A"}</li>
        <li><b>Message:</b> ${message}</li>
      </ul>
      <br/>
      <p>Best Regards,<br/>Comcares Team</p>
    `,
  };

  // Send both emails
  await transporter.sendMail(adminMailOptions);
  await transporter.sendMail(userMailOptions);
};

