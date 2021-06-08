const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const Order = sequelize.define(
  "order",
  {
    idorder: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    iduser: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isCancelled: {
      type: Sequelize.BOOLEAN,
      default: 0,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Order;
