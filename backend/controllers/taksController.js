let self = {};
const taksService = require("../services/taksService");

self.index = async (req, res, next) => {
  try {
    const result = await taksService.getAllTaks(req.user.id);
    res.sendSuccess(result, "Taks retrieved successfully!");
  } catch (error) {
    next(error);
  }
};

self.store = async (req, res, next) => {
  try {
    const result = await taksService.createTaks(req.body);
    res.sendSuccess(result, "Taks created successfully!");
  } catch (error) {
    next(error);
  }
};

self.update = async (req, res, next) => {
  try {
    const result = await taksService.updateTaks(req.params.id, req.body);
    res.sendSuccess(result, "Taks updated successfully!");
  } catch (error) {
    next(error);
  }
};

self.destroy = async (req, res, next) => {
  try {
    const result = await taksService.deleteTaks(req.params.id);
    res.sendSuccess(result, "Taks deleted successfully!");
  } catch (error) {
    next(error);
  }
};

module.exports = self;
