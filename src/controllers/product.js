const Product = require("../models/product_model");

module.exports.createProduct = async (req, res, next) => {
  //TODO
  //validate input
  try {
    const DBresponse = await Product.create(req.body);
    res.status(200).send("Created succesfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
module.exports.updateProduct = (req, res, next) => {
  //TODO
  //make sure the poster of the product is the same user
  //get product id from query
  //get data to be updated from the body
  //update the DB
  //send res
};
module.exports.getProduct = async (req, res, next) => {
  if (req.query.productid) {
    try {
      const DBresponse = await Product.findByPk(req.query.productid);
      if (DBresponse.length == 0) {
        res.status(204).send("No products!");
      } else {
        res.status(200).send(DBresponse);
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  } else {
    try {
      const DBresponse = await Product.findAll({});
      if (DBresponse.length == 0) {
        res.status(204).send("No products!");
      } else {
        res.status(200).send(DBresponse);
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
};
