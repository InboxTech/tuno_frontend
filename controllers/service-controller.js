const Service = require("../models/service-model");

//add services
const addServices = async (req, res) => {
  try {
    console.log(req.body); // Log the form data

    const {
      title,
      short_description,
      full_description,
      image_alt_text,
      status,
    } = req.body;

    // For single image upload
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    // For multiple image uploads
    const service_images = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];

    // Validate required fields
    if (!title || !short_description || !full_description || !image_alt_text || !status || !image) {
      return res.status(400).json({ msg: "Please add all required fields" });
    }

    // Create and save the new service
    const newService = new Service({
      title,
      short_description,
      full_description,
      service_image: image, // single image or null
      service_images, // multiple images array
      image_alt_text,
      status,
    });

    const savedService = await newService.save();

    res.status(200).json({ msg: "Service added successfully", service: savedService });
  } catch (error) {
    console.error('Error in addService:', error); // Log the error
    res.status(500).json({ msg: "Server error", error: error.message });
  }
};


//get services
const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();

    // Log the services to check if the data is being fetched properly
    console.log("Services from DB:", services);

    if (!services || services.length === 0) {
      // If no services are found, return 404
      return res.status(404).json({ message: "No services found" });
    }

    // If services are found, return them with a 200 response
    return res.status(200).json(services);
   
  } catch (error) {
    // Log the error and send a 500 response in case of an exception
    console.error("Error fetching services:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

// update service 
const updateServices = async (req,res) => {
try {
        const serviceId = req.params.id;
        const updateData = req.body;

        // Optional: Validate required fields
        // if (!updateData.title || !updateData.short_description || !updateData.full_description) {
        //     return res.status(400).json({ msg: "Missing required fields" });
        // }

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


//delete services 
const deleteServices = async (req, res) => {
     try {
        const id = req.params.id;
        await Service.deleteOne({_id: id})
        return res.status(200).json({message: "Service deleted successfully"})
    } catch (error) {
        next(error)
    }
}
module.exports = {addServices,getServices,updateServices,deleteServices};