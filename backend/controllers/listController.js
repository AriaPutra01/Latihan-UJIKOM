let self = {};
const listService = require("../services/listService");

self.index = async (req, res) => {
  const lists = await listService.getAllList(req.user.id);
  res.sendSuccess(lists, "List retrieved successfully!");
};

self.store = async (req, res) => {
  const { name } = req.body;
  const list = await listService.createList(req.user.id, name);
  res.sendSuccess(list, "List created successfully!");
};

self.update = async (req, res) => {
  const { name } = req.body;
  const list = await listService.updateList(req.params.id, name);
  res.sendSuccess(list, "List updated successfully!");
};

self.destroy = async (req, res) => {
  const list = await listService.deleteList(req.params.id);
  res.sendSuccess(list, "List deleted successfully!");
};

module.exports = self;
