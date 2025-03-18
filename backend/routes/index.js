const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");
const TodoRoutes = require("./TodoRoutes");

router.use("/auth", AuthRouter);
router.use("/todo", TodoRoutes);

module.exports = router;
