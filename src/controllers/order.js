module.exports.createOrder = (req, res, next) => {
  //TODO
  //get the order details from the user request
  //create record in the DB
  //return success/failed in response
};
module.exports.updateOrder = (req, res, next) => {
  //TODO
  //get orderid from query
  //get fields to update
  //update the DB
  //return success/faild in response
};
module.exports.cancelOrder = (req, res, next) => {
  //TODO
  //get orderid from query
  //mark cancel option in record
  //return success/faild in response
};
module.exports.getOrder = (req, res, next) => {
  //TODO
  //if there is an id in the query return the specific order *make user matches res.userData.id*
  //else return all the orders with the res.userData.id
  //return data/failed in response
};
