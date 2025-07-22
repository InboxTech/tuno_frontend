const express = require('express');
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const { addApplication,getAllApplications,deleteApplication, deleteSelectedApplications } = require("../controllers/jobApplication-controller")
const { uploadHandler } = require("../middlewares/upload-middleware");

//add job application
router.route('/applyJobDetails').post(uploadHandler([{ name: 'resume', maxCount: 1 }]),addApplication)

//get applications
router.route('/getApplication').get(authMiddleware,adminMiddleware,getAllApplications)

//delete application
router.route('/deleteApplication/:id').delete(authMiddleware,adminMiddleware,deleteApplication)

//delet selected application
router.route('/deleteSelectedApplications').post(authMiddleware,adminMiddleware,deleteSelectedApplications)
module.exports = router;