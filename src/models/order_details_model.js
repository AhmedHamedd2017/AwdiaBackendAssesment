const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const OrderDetails = sequelize.define(
  "orderdetails",
  {
    idorderdetails: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idproduct: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    idorder: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    totalPrice: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = OrderDetails;
