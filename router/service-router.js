const express = require("express");
const {addServices,getServices,updateServices,deleteServices} = require("../controllers/service-controller");
const {uploadSingleImage,uploadMultipleImages} = require("../middlewares/upload-middleware"); // ✅ Correct import
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleware = require("../middlewares/auth-middleware");


const router = express.Router();

router.route("/addService").post(authMiddleware,adminMiddleware, uploadSingleImage("service_image"),uploadMultipleImages("service_images"), addServices);
router.route("/getService").get(authMiddleware,adminMiddleware,getServices);
router.route("/updateService/:id").put(authMiddleware,adminMiddleware, uploadSingleImage("service_image"),uploadMultipleImages("service_images"),updateServices);
router.route("/deleteService/:id").delete(authMiddleware,adminMiddleware,deleteServices);

module.exports = router;