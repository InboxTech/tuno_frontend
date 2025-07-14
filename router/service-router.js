const express = require("express");
const {getServices,addServices,deleteServices} = require("../controllers/service-controller");

const router = express.Router();

router.route("/getService").get(getServices);
router.route("/addService").post(addServices);
// router.route("/updateService/:id").put(updateServices);
router.route("/deleteService/:id").delete(deleteServices);

module.exports = router;