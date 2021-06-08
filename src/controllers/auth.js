const jwt = require("jsonwebtoken");

const userModel = require("../models/user_model");

module.exports.login = async (req, res, next) => {
  try {
    const DBresponse = await userModel.findOne({
      where: { username: req.body.username },
    });
    if (DBresponse.username && DBresponse.password === req.body.password) {
      await userModel.update(
        { tokenIAT: Date.now() },
        { where: { username: req.body.username } }
      );
      const token = jwt.sign(
        {
          username: DBresponse.username,
          iduser: DBresponse.iduser,
        },
        "JWTsecret",
        {
          expiresIn: "1d",
        }
      );
      res.status(200).send(token);
    } else {
      res.status(401).send("Wrong credentials");
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

module.exports.logout = async (req, res, next) => {
  try {
    const DBresponse = await userModel.update(
      { tokenDAT: Date.now() },
      { where: { username: req.userData.username } }
    );
    if (DBresponse) {
      res.status(200).send("Logout sucessfully");
    } else {
      res.status(404).send("no such id");
    }
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
