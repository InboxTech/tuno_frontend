const express = require("express");
const adminControler = require("../controllers/admin-cntroller")
const authMiddleware = require("../middlewares/auth-middleware");
const adminMidelware = require("../middlewares/admin-middleware");
const router = express.Router(); 


router.route('/users').get(authMiddleware,adminMidelware,adminControler.getAllUsers);
router.route('/users/:id').get(authMiddleware,adminMidelware,adminControler.getUserById)
router.route('/users/update/:id').patch(authMiddleware,adminMidelware,adminControler.updateUserById)

module.exports = router;
