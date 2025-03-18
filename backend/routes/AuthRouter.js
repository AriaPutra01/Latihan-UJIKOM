const express = require("express");
const authController = require("../controllers/AuthController");
const { authenticateUser } = require("../middleware/AuthMiddleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);
router.get("/me", authenticateUser, authController.me);

module.exports = router;
