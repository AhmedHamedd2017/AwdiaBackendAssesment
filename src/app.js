const express = require("express");
const cors = require("cors");
const Sequelize = require("sequelize");

const app = express();
const PORT = 3000;
const sequelize = Sequelize(/*Parameters*/);

app.use(cors());
app.use(express.json());

app.listen(PORT);
