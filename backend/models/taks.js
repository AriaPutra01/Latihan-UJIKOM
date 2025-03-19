"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Taks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Taks.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      list_id: {
        allowNull: false,
        type: DataTypes.UUID,
        references: {
          model: "Lists",
          key: "id",
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      status: {
        allowNull: false,
        type: DataTypes.ENUM("Done", "Doing"),
      },
      priority: {
        allowNull: false,
        type: DataTypes.ENUM("Low", "Medium", "High"),
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Taks",
    }
  );
  return Taks;
};
