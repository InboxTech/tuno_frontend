const Team = require("../models/team-model");

//  Create a new team member
const createTeamMember = async (req, res) => {
  try {
    const {
      title,
      designation,
      experience,
      facebook,
      twitter,
      linkedIn,
      instagram,
      description,
      status,
    } = req.body;

    //  Correctly access uploaded image
    const image =
      req.files && req.files.image && req.files.image[0]
        ? `/uploads/teams/${req.files.image[0].filename}`
        : null;

    if (
      !title ||
      !designation ||
      !experience ||
      !linkedIn ||
      !description ||
      !image
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields including image." });
    }

    const team = new Team({
      title,
      designation,
      experience,
      facebook,
      twitter,
      linkedIn,
      instagram,
      description,
      status,
      image,
    });

    await team.save();
    res.status(201).json({ message: "Team member created successfully", team });
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({
      message: "Failed to create team member",
      error: error.message,
    });
  }
};


const handleDeleteTeam = async (id) => {
  try {
    await axios.delete(`/team/delete/${id}`);
    toast.success("Team member deleted");
    fetchTeamList();
  } catch (error) {
    toast.error("Delete failed");
  }
};
//  Get all team members
const getAllTeamMembers = async (req, res) => {
  try {
    const members = await Team.find().sort({ createdAt: -1 });
    res.status(200).json(members);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch team members", error: error.message });
  }
};

//  Get single team member by ID
const getTeamMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const member = await Team.findById(id);
    if (!member) {
      return res.status(404).json({ message: "Team member not found" });
    }
    res.status(200).json(member);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to get team member", error: error.message });
  }
};

//  Update team member by ID
const updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    if (req.files && req.files.image && req.files.image[0]) {
      updateData.image = `/uploads/teams/${req.files.image[0].filename}`;
      console.log("Uploaded files:", req.files); 
    }

    const updatedMember = await Team.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedMember) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json(updatedMember);
  } catch (error) {
    console.error("Update error:", error);
    res.status(500).json({ message: "Server error during update" });
  }
};

//  Delete team member by ID
const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Team.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Team member not found" });
    }

    res.status(200).json({ message: "Team member deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete team member", error: error.message });
  }
};

// delete multipule ===>
const deleteMultipleTeamMembers = async (req, res) => {
  try {
    const { ids } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res
        .status(400)
        .json({ message: "No team members selected for deletion" });
    }

    await Team.deleteMany({ _id: { $in: ids } });

    res
      .status(200)
      .json({ message: "Selected team members deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting multiple team members",
      error: error.message,
    });
  }
};
module.exports = {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
  deleteMultipleTeamMembers,
};
