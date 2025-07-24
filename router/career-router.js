const express = require('express');
const router = express.Router();
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleware = require("../middlewares/auth-middleware");
const {addJobOpenings,getJobOpenings,getJobOpeningsAdmin,deleteJobOpenings,deleteSelectedJobOpenings,updateJobOpenings,getJobOpeningById,getRelatedJobsByCategory} = require('../controllers/career-controller');

//add jon openings
router.route('/addJobOpening').post(authMiddleware, adminMiddleware,addJobOpenings);

//get all job openings for admin
router.route('/getJobOpeningsAdmin').get(authMiddleware, adminMiddleware, getJobOpeningsAdmin);

//get all job openings for frontend only shows active status
router.route('/getJobOpenings').get( getJobOpenings);

//get job openings by id
router.route('/getJobOpeningById/:id').get(getJobOpeningById);

//get related job openings
router.route('/getRelatedJobOpenings/:id').get(getRelatedJobsByCategory);

//delete job openings
router.route('/deleteJobOpening/:id').delete(authMiddleware, adminMiddleware, deleteJobOpenings);

//delete selected job openings
router.route('/deleteSelectedJobOpenings').post(authMiddleware, adminMiddleware, deleteSelectedJobOpenings);

//update job openings
router.route('/updateJobOpening/:id').put(authMiddleware, adminMiddleware, updateJobOpenings);
module.exports = router;