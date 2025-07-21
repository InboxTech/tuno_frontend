const {Schema, model} = require("mongoose");

const blogSchema = new Schema({
    title: { type: String, required: true},
    image: { type: String, required: true},
    category: { type: String, required: true},
    shortDescription: { type: String, required: true},
    description: { type: String, required: true},
    author: { type: String, required: true, default:"Admin" },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, enum: ["Active", "Inactive", "Pending"], default: "active",},
})

// create a model or collection
const Blog = new model("Blog", blogSchema);

module.exports = Blog;