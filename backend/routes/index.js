const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");
const TodoRoutes = require("./TodoRoutes");
const TaksRoutes = require("./TaksRoutes");
const { authenticateUser } = require("../middleware/AuthMiddleware");

router.use("/auth", AuthRouter);
router.use("/list", authenticateUser, TodoRoutes);
router.use("/taks", authenticateUser, TaksRoutes);

module.exports = router;
