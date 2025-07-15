const express = require("express");
const router = express.Router();
const uploadSingleImage = require("../middlewares/upload-middleware"); // ✅ Correct import

const {
  createTeamMember,
  getAllTeamMembers,
  getTeamMemberById,
  updateTeamMember,
  deleteTeamMember,
  deleteMultipleTeamMembers,
} = require("../controllers/team-controller");

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

//  get all team members
router.route("/team").get(getAllTeamMembers);

//  create new team member
router
  .route("/team/create")
  .post(
    authMiddleware,
    adminMiddleware,
    uploadSingleImage("image"), 
    createTeamMember
  );

//  get one member
router.route("/team/:id").get(getTeamMemberById);

//  update one member
router
  .route("/team/update/:id")
  .put(
    authMiddleware,
    adminMiddleware,
    uploadSingleImage("image"),
    updateTeamMember
  );

//  delete one member 
router
  .route("/team/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteTeamMember);

//  delete multiple members
router
  .route("/team/delete-multiple-members")
  .post(authMiddleware, adminMiddleware, deleteMultipleTeamMembers);

module.exports = router;
