const express = require("express");

const auth = require("../controllers/auth");
const auth_user = require("../middlewares/authorize_user");

const router = express.Router();

router.post("/login", auth.login);
router.get("/logout", auth_user.user, auth.logout);

module.exports = router;
