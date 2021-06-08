const Order = require("../models/order_model");
const OrderDetails = require("../models/order_details_model");

module.exports.createOrder = async (req, res, next) => {
  //[[ {idproduct, quantity, totalPrice}],[ {idproduct, quantity, totalPrice}]]
  try {
    req.body.forEach(async (order) => {
      const DBresponse = await Order.create({ iduser: req.userData.iduser });
      order.forEach(async (product) => {
        await OrderDetails.create({
          idproduct: product.idproduct,
          idorder: DBresponse.idorder,
          quantity: product.quantity,
          totalPrice: product.totalPrice,
        });
      });
    });
    res.status(200).send("Orders created succesfully");
  } catch (error) {
    res.status(500).send("Internal server error");
  }
};
module.exports.updateOrder = async (req, res, next) => {
  if (req.query.orderid) {
    const order = await Order.findByPk(req.query.orderid);
    if (order.iduser === req.userData.iduser) {
      req.body.forEach(async (updateStatment) => {
        const existing = await OrderDetails.findOne({
          where: {
            idorder: req.query.orderid,
            idproduct: updateStatment.idproduct,
          },
        });
        if (existing) {
          await OrderDetails.update(updateStatment, {
            where: {
              idorderdetails: existing.idorderdetails,
            },
          });
        } else {
          await OrderDetails.create({
            idproduct: updateStatment.idproduct,
            quantity: updateStatment.quantity,
            totalPrice: updateStatment.totalPrice,
            idorder: req.query.orderid,
          });
        }
      });
      res.status(200).send("Order updated");
    } else {
      res.status(401).send("Unauthorized user");
    }
  } else {
    res.status(400).send("Expecting order id in query");
  }
};
module.exports.cancelOrder = async (req, res, next) => {
  if (req.query.orderid) {
    try {
      const DBresponse = await Order.findByPk(req.query.orderid);
      if (DBresponse) {
        if (DBresponse.iduser === req.userData.iduser) {
          DBresponse.dataValues.isCancelled = 1;
          await Order.update(DBresponse.dataValues, {
            where: { idorder: req.query.orderid },
          });
          res.status(200).send("Order cancelled");
        } else {
          res.status(401).send("Unauthorized user");
        }
      } else {
        res.status(404).send("Order id not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  } else {
    res.status(400).send("Please include the order id in the URL query");
  }
};
module.exports.getOrder = async (req, res, next) => {
  if (req.query.orderid) {
    try {
      const DBresponse = await Order.findByPk(req.query.orderid);
      if (DBresponse) {
        if (DBresponse.iduser === req.userData.iduser) {
          const orderDetails = await OrderDetails.findAll({
            where: { idorder: DBresponse.idorder },
          });
          const productDetails = orderDetails.map((product) => {
            return {
              productId: product.idproduct,
              quantity: product.quantity,
              totalPrice: product.totalPrice,
            };
          });
          res
            .status(200)
            .send({ productDetails, isCancelled: DBresponse.isCancelled });
        } else {
          res.status(401).send("Unauthorized user");
        }
      } else {
        res.status(404).send("Order id not found");
      }
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  } else {
    try {
      const DBresponse = await Order.findAll({
        where: { iduser: req.userData.iduser },
      });
      res.status(200).send(DBresponse);
    } catch (error) {
      res.status(500).send("Internal server error");
    }
  }
};
