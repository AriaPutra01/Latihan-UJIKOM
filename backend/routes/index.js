const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");
const TodoRoutes = require("./TodoRoutes");
const { authenticateUser } = require("../middleware/AuthMiddleware");

router.use("/auth", AuthRouter);
router.use("/todo", authenticateUser, TodoRoutes);

module.exports = router;
