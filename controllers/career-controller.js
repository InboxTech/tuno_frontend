const Career = require('../models/career-model');

const addJobOpenings = async (req, res) => {
  try {
     const { designation, skills, short_description, full_description, openings, experience, jobtype, joinin, last_date } = req.body;

     if(!designation || !skills || !short_description || !full_description || !openings || !experience || !jobtype || !joinin || !last_date) {
        return res.status(400).json({ msg: "Please fill all the fields" });
     }

       const parsedLastDate = new Date(last_date);
    if (isNaN(parsedLastDate)) {
      return res.status(400).json({ msg: "Invalid last_date format" });
    }
    const newJobOpening = new Career({designation, skills, short_description, full_description, openings, experience, jobtype, joinin, last_date })
    await newJobOpening.save();
    console.log("New Job Opening:", newJobOpening);
    res.status(201).json({ message: "Job opening added successfully", jobOpening: newJobOpening });
  } catch (error) {
    console.error("Error adding job opening:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
}


//get all job openings for admin
const getJobOpeningsAdmin = async (req, res) => {
  try {
    const jobOpenings = await Career.find();
    res.status(200).json({message: "get openings successfully",jobOpenings});
  } catch (error) {
    console.error("Error fetching job openings:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};


//get all job openings for frontend only shows active status
const getJobOpenings = async (req, res) => {
  try {
    const jobOpenings = await Career.find({ status: 'Active' });
    res.status(200).json({message: "get openings successfully",jobOpenings});
  } catch (error) {
    console.error("Error fetching job openings:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

//get job openings by id
const getJobOpeningById = async (req, res) => {
  try {
    const id = req.params.id;
    const jobOpening = await Career.findById(id);
    if (!jobOpening) {
      return res.status(404).json({ msg: "Job opening not found" });
    }
    res.status(200).json({ message: "Job opening fetched successfully", jobOpening });
  } catch (error) {

    console.error("Error fetching job opening:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

//delete job openings
const deleteJobOpenings = async(req,res) => {
    try {
        const id = req.params.id;
        const jobOpening = await Career.findByIdAndDelete(id);
        if (!jobOpening) {
            return res.status(404).json({ msg: "Job opening not found" });
        }
        res.status(200).json({ message: "Job opening deleted successfully" });
    } catch (error) {
        console.error("Error deleting job opening:", error);
        return res.status(500).json({ msg: "Server error", error: error.message });
        
    }
}

//delete selected job openings
const deleteSelectedJobOpenings = async (req, res) => {
  try {
    const { ids } = req.body;
    console.log("BODY:", req.body);
    
    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ msg: "No IDs provided" });
    }

    const result = await Career.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: "Selected job openings deleted successfully", result });
  } catch (error) {
    console.error("Error deleting selected job openings:", error);
    return res.status(500).json({ msg: "Server error", error: error.message });
  }
};

//update job openings
const updateJobOpenings = async (req, res) => {
    try {
        const jobid = req.params.id;
        const updateData = req.body;
        const updatedJobOpening = await Career.findByIdAndUpdate(jobid, updateData, {
            new: true, // Return the updated document   
        });
        if (!updatedJobOpening) {
            return res.status(404).json({ msg: "Job opening not found" });
        }
        res.status(200).json({ message: "Job opening updated successfully", jobOpening: updatedJobOpening });

    } catch (error) {
        console.error("Error updating job opening:", error);
        return res.status(500).json({ msg: "Server error", error: error.message });
        
    }
}
module.exports = {addJobOpenings,getJobOpenings,getJobOpeningsAdmin, deleteJobOpenings,deleteSelectedJobOpenings,updateJobOpenings,getJobOpeningById}   