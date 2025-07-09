const express = require("express");
const {getServices,addServices,updateServices} = require("../controllers/service-controller");

const router = express.Router();

router.route("/getService").get(getServices);
router.route("/addService").post(addServices);
router.route("/updateService/:id").put(updateServices);

module.exports = router;