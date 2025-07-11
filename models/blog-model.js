const {Schema, model} = require("mongoose");

const blogSchema = new Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    category: { type: String, required: true},
    shortDescription: { type: String, required: true},
    description: { type: String, required: true},
    author: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

// create a model or collection
const Blog = new model("Blog", blogSchema);

module.exports = Blog;