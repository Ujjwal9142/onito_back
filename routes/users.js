const express = require("express");
const userController = require("../controllers/users");

const router = express.Router();

router.post("/register", userController.registerUser);
router.get("/all", userController.getAllUsers);

module.exports = router;
