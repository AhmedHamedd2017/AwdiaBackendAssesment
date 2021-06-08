const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const User = sequelize.define(
  "user",
  {
    iduser: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    tokenIAT: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    tokenDAT: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = User;
