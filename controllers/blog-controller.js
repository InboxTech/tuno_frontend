const { model } = require("mongoose");
const Blog = require("../models/blog-model");

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
module.exports = blogs;