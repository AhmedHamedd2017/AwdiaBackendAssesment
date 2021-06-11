const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const OrderStatus = sequelize.define(
  "orderstatus",
  {
    idorderstatus: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    idorder: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isPacked: {
      type: Sequelize.BOOLEAN,
      default: 0,
    },
    packDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    isDelivered: {
      type: Sequelize.BOOLEAN,
      default: 0,
    },
    deliveryDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = OrderStatus;
