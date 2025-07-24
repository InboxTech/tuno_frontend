const express = require("express");
const router = express.Router();

const {
  subscribeForm,
  getAllsubscribe,
  softDeleteSubscribe,
  softDeleteSelectedSubscribes

} = require("../controllers/subscribe-controller");
const authMiddleware = require("../middlewares/auth-middleware");
const adminMidelware = require("../middlewares/admin-middleware");

router.route("/subscribe").post(subscribeForm);
router.route("/usersubscribe").get(authMiddleware, getAllsubscribe);
router
  .route("/subscribe/delete/:id")
  .delete(authMiddleware, adminMidelware, softDeleteSubscribe);
router
  .route("/subscribe/delete-multiple-subscribes")
  .post(authMiddleware, adminMidelware, softDeleteSelectedSubscribes);

  
module.exports = router;
