const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  uid: { type: String, required: true },
  age: { type: Number, required: true },
  mobileno: { type: String, required: true },
  email: { type: String, required: true },
});

exports.userSchema = userSchema;
