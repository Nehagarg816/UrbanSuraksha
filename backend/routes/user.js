const express = require("express");
const passport = require("passport");
const router = express.Router();
const User = require("../models/user");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/user.js");
const wrapAsync = require("../utils/wrapAsync.js");

router.post("/signup", userController.signup);
// /lognin
router.post("/login", userController.login);
// /logout
router.get("/logout", userController.logout);

module.exports = router;
