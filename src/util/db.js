const Sequelize = require("sequelize");

const sequelize = new Sequelize("awdia", "root", "AhmedHamed1", {
  dialect: "mysql",
});

module.exports = sequelize;
