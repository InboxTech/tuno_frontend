const Contact = require("../models/contact-model");

// submit form 
const contactForm = async (req, res) => {
  try {
    const contactData = req.body;

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

// get all contact
const getAllContact = async (req, res) => {
  try {
    const contactUser = await Contact.find().sort({ createdAt: -1 });
    if (!contactUser || contactUser.length === 0) {
      return res.status(404).json({ msg: "No contact found" });
    }
    return res.status(200).json(contactUser);
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return res.status(500).json({ msg: "Failed to fetch contacts" });
  }
};

//delete contact
const deleteContactById = async (req, res, next) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ msg: "Deleted contact successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    next(error);
  }
};
// delete multi contact ==>
  const deleteMultipleContact = async (req, res) => {
  try {
    const { contactIds } = req.body;
    await Contact.deleteMany({ _id: { $in: contactIds } });
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting contacts", error });
  }
};
module.exports = { contactForm, getAllContact, deleteContactById,deleteMultipleContact };
