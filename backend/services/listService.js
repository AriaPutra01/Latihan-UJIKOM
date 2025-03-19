const { List } = require("../models");

let self = {};

self.getAllList = async (user_id) => {
  return await List.findAll({
    where: {
      user_id,
    },
  });
};

self.createList = async (user_id, name) => {
  return await List.create({
    user_id,
    name,
  });
};

self.updateList = async (id, name) => {
  const list = await List.findByPk(id);
  list.name = name;
  await list.save();
  return list;
};

self.deleteList = async (id) => {
  const list = await List.findByPk(id);
  await list.destroy();
  return list;
};

module.exports = self;
