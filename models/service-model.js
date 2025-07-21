const { Schema, model } = require("mongoose");

const serviceSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  short_description: {
    type: String,
    required: true,
    trim: true
  },
  full_description: {
    type: String,
    required: true
  },
  service_image: {
    type: String, // URL
    required: true
  },
  image_alt_text: {
    type: String,
    required: true
  },
  // service_images: {
  //    type: [String], // Array of image URLs
  //   default: []
  // },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Pending'],
    default: 'Pending'
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date
  }
});

const Service = new model("Service", serviceSchema);

module.exports = Service;