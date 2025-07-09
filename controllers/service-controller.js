const Service = require("../models/service-model");

//add services
const addServices = async(req,res) => {
     try {
        console.log(req.body)
        const { title, short_description, full_description, service_image, image_alt_text, service_images,  status } = req.body;

        // Validate required fields
        if (!title || !short_description || !full_description) {
            return res.status(400).json({ msg: "Please add this field" });
        }

        const newService = new Service({ title, short_description, full_description, service_image, image_alt_text, service_images,  status });

        const savedService = await newService.save();

        res.status(201).json({ msg: "Service added successfully", service: savedService });
    } catch (error) {
        console.error(`addService: ${error}`);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}


//get services
const getServices = async (req, res) => {
    try {
        const services = await Service.find();
        console.log(services)
        if (!services || services.length === 0) {
          return res.status(404).json({ message: "No services found" });
            
        }
        return res.status(200).json(services);
    } catch (error) {
        next(error)
        // console.log(`services: ${error}`);
        // res.status(500).json({ msg: "Server error", error: error.message });
    }
};


// update service 
const updateServices = async (req,res) => {
try {
        const serviceId = req.params.id;
        const updateData = req.body;

        // Optional: Validate required fields
        if (!updateData.title || !updateData.short_description || !updateData.full_description) {
            return res.status(400).json({ msg: "Missing required fields" });
        }

        const updatedService = await Service.findByIdAndUpdate(
            serviceId,
            updateData,
            { new: true } // Return the updated document
        );

        if (!updatedService) {
            return res.status(404).json({ msg: "Service not found" });
        }

        res.status(200).json({ msg: "Service updated successfully", service: updatedService });
    } catch (error) {
        console.error("updateService error:", error);
        res.status(500).json({ msg: "Server error", error: error.message });
    }
}
module.exports = {getServices,addServices,updateServices};