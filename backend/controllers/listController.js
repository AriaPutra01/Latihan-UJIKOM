let self = {};
const listService = require("../services/listService");

self.index = async (req, res, next) => {
  try {
    const lists = await listService.getAllList(req.user.id);
    res.sendSuccess(lists, "List retrieved successfully!");
  } catch (error) {
    next(error);
  }
};

self.store = async (req, res, next) => {
  try {
    const { name } = req.body;
    const list = await listService.createList(req.user.id, name);
    res.sendSuccess(list, "List created successfully!");
  } catch (error) {
    next(error);
  }
};

self.update = async (req, res, next) => {
  try {
    const { name } = req.body;
    const list = await listService.updateList(req.params.id, name);
    res.sendSuccess(list, "List updated successfully!");
  } catch (error) {
    next(error);
  }
};

self.destroy = async (req, res, next) => {
  try {
    const list = await listService.deleteList(req.params.id);
    res.sendSuccess(list, "List deleted successfully!");
  } catch (error) {
    next(error);
  }
};

module.exports = self;
