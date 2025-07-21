// const { model } = require("mongoose");
const Blog = require("../models/blog-model");

//---------------------------------------------------------
// client side logic 
// create blog logic 
//---------------------------------------------------------

const createBlog = async (req, res) => {
    try {
        const { 
            title,
            category,
            shortDescription,
            description,
            author,
            status,
        } = req.body;

        const image = req.file ? `/uploads/blogs/${req.file.filename}` : null;

        // if (!title || !category || !shortDescription || !description || !image) {
        //     return res.status(400).json({ message: "Please fill all required fields" });
        // }

        const blog = new Blog({
            title,
            category,
            shortDescription,
            description,
            author,
            status,
            image,
        });

        await blog.save();
        res.status(201).json({ message: "Blog created successfully", blog});
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({ message: "Failed to create blog", error: error.message });
    }
};

//---------------------------------------------------------
// get blog logic 
//---------------------------------------------------------
const blogs = async (req, res) => {
    try {
        const response = await Blog.find();
        if(!response || response.length === 0){
            // handle the case where no document was found
            return res.status(404).json({message: "No blog found"});
        }
        res.status(200).json({ msg: response});
    } catch (error) {
        console.log(`services: ${error}`);        
    }
};

const getBlogById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Blog.findOne({ _id: id});
        console.log(data);
        return res.status(200).json( data );
        
    } catch (error) {
        res.status(500).json({ message: "Failed to update Blog", error: error.message });
        console.log(error);
    }
};

const updateBlog = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = await Blog.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });
        if (!updateData) {
            return res.status(404).json({ message: "Blog not found" });
        }

        res.status(200).json({ message: "Blog updated successfully", updateData });

    } catch (error) {
        res.status(500).json({ message: "Failed to update Blog", error: error.message });
        console.log(error);
    }
}

module.exports = {createBlog, blogs, getBlogById, updateBlog};