const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  date: { type: Date, required: true },
  item: {
    name: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
  },
  totalprice: { type: Number, required: true },
  uid: { type: String, required: true },
  status: { type: String, required: true, default: "paid" },
  code: { type: Number, required: true },
});

exports.orderSchema = orderSchema;
