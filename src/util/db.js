const Sequelize = require("sequelize");

const sequelize = new Sequelize("awdia", "root", "AhmedHamed1", {
  dialect: "mysql",
  logging: false,
});

module.exports = sequelize;
