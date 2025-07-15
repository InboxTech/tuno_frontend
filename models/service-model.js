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
    required: false
  },
  image_alt_text: {
    type: String,
    required: false
  },
  service_images: {
    type: [String], // Array of image URLs
    default: []
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'pending'],
    default: 'pending'
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date
  }
});

const Service = new model("Service", serviceSchema);

module.exports = Service;