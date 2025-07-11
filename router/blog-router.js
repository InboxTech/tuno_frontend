const express = require("express");
const blogs = require("../controllers/blog-controller");
const router = express.Router();

router.route("/blog").get(blogs);

module.exports = router;