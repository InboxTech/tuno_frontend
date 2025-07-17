const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    description: { type: String, required: true, trim: true },
    name: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Pending"],
      default: "Active",
    },
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
module.exports = Testimonial;
