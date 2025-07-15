const Testimonial = require("../models/testimonial-model");

//  Create a new testimonial

const createTestimonial = async (req, res) => {
  try {
    const { description, name, position, rating } = req.body;
    const image = req.file
      ? `/uploads/testimonials/${req.file.filename}`
      : null;

    if (!description || !name || !position || !rating) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const testimonial = new Testimonial({
      description,
      name,
      position,
      image,
      rating,
    });

    await testimonial.save();
    res
      .status(201)
      .json({ message: "Testimonial created successfully", testimonial });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create testimonial", error: error.message });
  }
};

//  Get all testimonials
const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find().sort({ createdAt: -1 });
    res.status(200).json(testimonials);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch testimonials", error: error.message });
  }
};

//  Get single testimonial by ID
const getTestimonialById = async (req, res) => {
  try {
    const { id } = req.params;
    const testimonial = await Testimonial.findById(id);
    const testimonials = await Testimonial.find({ deleted: false }).sort({
      createdAt: -1,
    });

    if (!testimonial) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json(testimonial);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get testimonial", error: error.message });
  }
};

//  Update testimonial by ID
const updateTestimonial = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, position, rating, description, status } = req.body;

    const updatedFields = {
      name,
      position,
      rating,
      description,
      status,
    };

    if (req.file) {
      updatedFields.image = `/uploads/testimonials/${req.file.filename}`;
    }

    await Testimonial.findByIdAndUpdate(id, updatedFields);
    res.status(200).json({ message: "Updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Update failed", error });
  }
};


//  Delete testimonial by ID
const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Testimonial.findByIdAndUpdate(id, { deleted: true }, { new: true });

    if (!deleted) {
      return res.status(404).json({ message: "Testimonial not found" });
    }

    res.status(200).json({ message: "Testimonial deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete testimonial", error: error.message });
  }
};


//  Delete multiple testimonials
const deleteMultipleTestimonials = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ message: "No testimonials selected for deletion" });
    }

    await Testimonial.updateMany({ _id: { $in: ids } }, { $set: { deleted: true } });

    res
      .status(200)
      .json({ message: "Selected testimonials deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Error deleting multiple testimonials",
        error: error.message,
      });
  }
};

module.exports = {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
  deleteMultipleTestimonials,
};
