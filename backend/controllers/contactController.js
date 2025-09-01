import Contact from "../models/contact.js";
import { sendContactEmail } from "../utils/emailService.js";

// Create new contact
export const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, serviceCategory, message } = req.body;

    // Basic validations
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }
    if (phone && !/^\d{10}$/.test(phone)) {
      return res.status(400).json({ success: false, message: "Phone must be 10 digits" });
    }

    // Save contact to DB
    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      company,
      serviceCategory,
      message,
    });

    await newContact.save();

    // Send emails (admin + user)
    try {
      await sendContactEmail(req.body);
      console.log("Email notifications sent successfully.");
    } catch (emailError) {
      console.error("Error sending email:", emailError.message);
      // Note: Not failing the request because DB save succeeded
    }

    // Response to frontend
    res.status(201).json({
      success: true,
      message: "Message saved successfully",
      data: newContact,
    });

  } catch (err) {
    console.error("Error in createContact:", err.message);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};
