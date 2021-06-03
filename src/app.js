const cors = require("cors");
const express = require("express");
const expressValidator = require("express-validator");

const sequelize = require("./util/db");
const auth_route = require("./routes/auth_route");
const order_route = require("./routes/product_route");
//const product_route = require("./routes/product_route");

const PORT = 3000;
const app = express();

app.use(cors());
app.use(express.json());
//app.use(expressValidator());

app.use("/auth", auth_route);
app.use("/product", order_route);
// app.use(product_controller);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to DB!");
    app.listen(PORT, () => {
      console.log(`App listening on port:${PORT}`);
    });
  })
  .catch((errors) => {
    console.log(errors);
  });
