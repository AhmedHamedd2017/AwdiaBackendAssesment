const cors = require("cors");
const express = require("express");
const multer = require("multer");
//const expressValidator = require("express-validator");

const sequelize = require("./util/db");
const auth_route = require("./routes/auth_route");
const product_route = require("./routes/product_route");
const order_route = require("./routes/order_route");

const PORT = 3000;
const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(cors());
app.use(express.json());
app.use(multer({ storage: storage, fileFilter: fileFilter }).single("image"));
//app.use(expressValidator());

app.use("/auth", auth_route);
app.use("/product", product_route);
app.use("/order", order_route);

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
