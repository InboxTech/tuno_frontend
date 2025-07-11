const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  date: { type: Date, default: Date.now },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// create a model or collection
const Contact = new model("Blog", blogSchema);

module.exports = Contact;
