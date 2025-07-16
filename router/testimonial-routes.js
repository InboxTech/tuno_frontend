const express = require("express");
const router = express.Router();
const {uploadSingleImage} = require("../middlewares/upload-middleware");

const {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
  deleteMultipleTestimonials,
} = require("../controllers/testimonial-controller");

const authMiddleware = require("../middlewares/auth-middleware");
const adminMiddleware = require("../middlewares/admin-middleware");

//  Get all testimonials
router.route("/testimonial").get(getAllTestimonials);

//  Create new testimonial
router
  .route("/testimonial/create")
  .post(
    authMiddleware,
    adminMiddleware,
    uploadSingleImage("image"), 
    createTestimonial
  );

//  Get one testimonial
router.route("/testimonial/:id").get(getTestimonialById);

//  Update one testimonial
router
  .route("/testimonial/update/:id")
  .put(
    authMiddleware,
    adminMiddleware,
    uploadSingleImage("image"),
    updateTestimonial
  );

//  Delete one testimonial
router
  .route("/testimonial/delete/:id")
  .delete(authMiddleware, adminMiddleware, deleteTestimonial);

//  Delete multiple testimonials
router
  .route("/testimonial/delete-multiple")
  .post(authMiddleware, adminMiddleware, deleteMultipleTestimonials);

module.exports = router;
