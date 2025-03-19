const express = require("express");
const router = express.Router();
const TodoController = require("../controllers/listController");

router.get("/", TodoController.index);
router.post("/", TodoController.store);
router.put("/:id", TodoController.update);
router.delete("/:id", TodoController.destroy);

module.exports = router;
