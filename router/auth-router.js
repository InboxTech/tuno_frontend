const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth-controller");
const authValidator = require("../validators/auth-validator");
// const loginSchema = require("../validators/auth-validator");
const validate = require("../middlewares/validate-middleware");


router.route("/").get(authController.home);
router.route("/register").post( validate(authValidator.signupSchema), authController.register);
router.route("/login").post( validate(authValidator.loginSchema),authController.login);

module.exports = router;