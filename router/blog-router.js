const express = require("express");
const blogsController = require("../controllers/blog-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMidelware = require("../middlewares/admin-middleware");
const { uploadHandler } = require("../middlewares/upload-middleware");
const router = express.Router();

// for client 
router.route("/blog").get(blogsController.blogs);
router.route("/blog/:id").get(blogsController.getBlogById);

// for admin || create new blog
router.route("/blog/create").post(authMiddleware,adminMidelware,uploadHandler([{ name: "image", maxCount: 1}]), blogsController.createBlog);
router.route("/blog/update/:id").put(authMiddleware, adminMidelware, uploadHandler([{ name: "image", maxCount: 1 }]), blogsController.updateBlog);

module.exports = router;