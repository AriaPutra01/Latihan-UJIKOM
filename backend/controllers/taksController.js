let self = {};
const taksService = require("../services/taksService");

self.index = async (req, res) => {
  const result = await taksService.getAllTaks(req.user.id);
  res.sendSuccess(result, "Taks retrieved successfully!");
};

self.store = async (req, res) => {
  const result = await taksService.createTaks(req.body);
  res.sendSuccess(result, "Taks created successfully!");
};

self.update = async (req, res) => {
  const result = await taksService.updateTaks(req.params.id, req.body);
  res.sendSuccess(result, "Taks updated successfully!");
};

self.destroy = async (req, res) => {
  const result = await taksService.deleteTaks(req.params.id);
  res.sendSuccess(result, "Taks deleted successfully!");
};

module.exports = self;
