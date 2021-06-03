const jwt = require("jsonwebtoken");

const userModel = require("../models/user_model");

module.exports.login = (req, res, next) => {
  //req.body.email;
  //req.body.password;
  //check from db for email then compare the password
  // const token = jwt.token({
  //   //userdata
  // });
  userModel
    .findAll({})
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
