const express = require("express");
const router = express.Router();
const TaksController = require("../controllers/taksController");

router.get("/", TaksController.index);
router.post("/", TaksController.store);
router.put("/:id", TaksController.update);
router.delete("/:id", TaksController.destroy);

module.exports = router;
