const express =require("express");
const { newUser, getUser,registerUser } = require("../controller/userController");
const router = express.Router();

router.route("/login").post(newUser);

router.route("/register").get(getUser);


router.route("/register").post(registerUser);

module.exports =router;