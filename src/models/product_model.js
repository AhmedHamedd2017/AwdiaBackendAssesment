const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const Product = sequelize.define(
  "product",
  {
    idproduct: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    specs: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    stock: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    iduser: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Product;
