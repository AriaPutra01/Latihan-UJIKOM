const { Taks } = require("../models");

let self = {};

self.getAllTaks = async () => {
  return await Taks.findAll();
};

self.getTaksById = async (id) => {
  return await Taks.findByPk(id);
};

self.createTaks = async (field) => {
  return await Taks.create(field);
};

self.updateTaks = async (id, field) => {
  const result = await Taks.findByPk(id);
  await result.update(field);
  return Taks;
};

self.deleteTaks = async (id) => {
  const result = await Taks.findByPk(id);
  await result.destroy();
  return result;
};

module.exports = self;
