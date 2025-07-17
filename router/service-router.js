const express = require("express");
const {addServices,getServices,updateServices,deleteServices,getServiceById,deleteSelectedServices} = require("../controllers/service-controller");
const { uploadHandler } = require("../middlewares/upload-middleware"); // ✅ Correct import
const adminMiddleware = require("../middlewares/admin-middleware");
const authMiddleware = require("../middlewares/auth-middleware");


const router = express.Router();

router
  .route("/addService")
  .post(
    authMiddleware,
    adminMiddleware,
    uploadHandler([
      { name: "service_image", maxCount: 1 },
      { name: "service_images", maxCount: 10 },
    ]),
    addServices
  );

  //get all services
router.route("/getService").get(getServices);

//get single sevic by id
router.route("/getServiceById/:id").get(getServiceById);

router.route("/updateService/:id").put(
    authMiddleware,adminMiddleware,  uploadHandler([
      { name: "service_image", maxCount: 1 },
      { name: "service_images", maxCount: 10 },
    ]),
        updateServices);
router.route("/deleteService/:id").delete(authMiddleware,adminMiddleware,deleteServices);
router.route("/deleteSelectedService").post(authMiddleware,adminMiddleware,deleteSelectedServices);

module.exports = router;