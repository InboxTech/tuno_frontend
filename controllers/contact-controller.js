const Contact = require("../models/contact-model");

const contactForm = async (req, res) => {
  try {
    const contactData = req.body;

    // Optional: basic check to ensure required fields exist
    if (
      !contactData.name ||
      !contactData.email ||
      !contactData.phone ||
      !contactData.subject ||
      !contactData.company ||
      !contactData.message
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Contact.create(contactData);
    return res.status(200).json({ message: "Message sent successfully" });
  } catch (error) {
    console.error("Error saving contact form:", error);
    return res.status(500).json({ message: "Message not delivered" });
  }
};

module.exports = contactForm;
