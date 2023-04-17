const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.js')

const user_controller = require("../controllers/User.js");

router.get("/api/homeUser", user_controller.index);
router.get("/api/testAuth", auth.index);
router.post("/api/createUser", user_controller.addUser);

module.exports = router;