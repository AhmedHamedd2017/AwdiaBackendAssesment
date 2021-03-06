const Product = require("../models/product_model");
const Image = require("../models/image_model");

module.exports.createProduct = async (req, res, next) => {
  //TODO
  //validate input
  req.body.iduser = req.userData.iduser;
  if (req.file) {
    try {
      const DBresponse = await Product.create(req.body);
      await Image.create({
        imagename: req.file.filename,
        idproduct: DBresponse.idproduct,
      });
      res.status(200).send("Created succesfully");
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(400).send("Must include png/jpg/jpeg file");
  }
};

module.exports.updateProduct = async (req, res, next) => {
  //TODO
  //validate data

  if (req.query.productid) {
    try {
      let DBresponse = await Product.findByPk(req.query.productid);
      if (!DBresponse) {
        res.status(404).send("No product with such id");
      } else {
        if (DBresponse.iduser !== req.userData.iduser) {
          res.status(401).send("Unauthorized user");
        } else {
          DBresponse = await Product.update(req.body, {
            where: { idproduct: req.query.productid },
          });
          res.status(200).send("Updated sucessfully");
        }
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(400).send("Include product id");
  }
};

module.exports.getProduct = async (req, res, next) => {
  if (req.query.productid) {
    try {
      const DBresponse = await Product.findByPk(req.query.productid);
      if (!DBresponse) {
        res.status(204).send("No products!");
      } else {
        images = await Image.findOne({
          where: { idproduct: DBresponse.idproduct },
        });
        res
          .status(200)
          .send({ image: images.imagename, ...DBresponse.dataValues });
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
