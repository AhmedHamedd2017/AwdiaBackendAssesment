const express = require("express");

const order = require("../controllers/order");
const auth_user = require("../middlewares/authorize_user");

const router = express.Router();

router.use(auth_user.user);

router.get("/", order.getOrder);
router.post("/", order.createOrder);
router.put("/", order.updateOrder);
router.delete("/", order.cancelOrder);

module.exports = router;
