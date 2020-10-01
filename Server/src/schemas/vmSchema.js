const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vmSchema = new Schema({
  orderid: { type: String, required: true },
  code: { type: Number, required: true, default: 0000 },
  status: { type: String, required: true },
});

exports.vmSchema = vmSchema;
