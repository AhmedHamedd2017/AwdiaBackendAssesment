const express = require("express");

const product = require("../controllers/product");
const auth_user = require("../middlewares/authorize_user");

const router = express.Router();

router.get("/", product.getProduct);
router.use(auth_user.user);
router.post("/", product.createProduct);
router.put("/", product.updateProduct);

module.exports = router;
