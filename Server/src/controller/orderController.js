const { orderSchema } = require("./schemas/orderSchema");
const mongoose = require("mongoose");

const Order = mongoose.model("Order", orderSchema);

exports.pastOrderController = (req, res) => {
  console.log(req.body);
  Order.find({ uid: req.body.uid }, function (err, docs) {
    if (err) {
      console.log(err);
      res.json("Something went wrong");
    } else {
      res.json(docs);
    }
  });
};

exports.addOrderController = (req, res) => {
  console.log(req.body);
  let order = new Order();
  console.log(req.body.pastorder);
  order.date = req.body.pastorder.date;
  order.item = req.body.pastorder.item;
  order.totalprice = req.body.pastorder.totalprice;
  order.uid = req.body.pastorder.uid;
  order.code = req.body.pastorder.code;
  order.save(function (err, doc) {
    if (err) {
      res.json("somthing wrong with input");
    } else {
      res.json(doc);
    }
  });
};
