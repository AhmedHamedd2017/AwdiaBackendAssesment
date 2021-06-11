const { Sequelize } = require("sequelize");

const sequelize = require("../util/db");

const Image = sequelize.define(
  "image",
  {
    idimage: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    imagename: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    idproduct: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);

module.exports = Image;
