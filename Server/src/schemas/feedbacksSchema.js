const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbacksSchema = new Schema({
  uid: { type: String, required: true },
  username: { type: String, required: true },
  comment: { type: String, required: true },
});
exports.feedbacksSchema = feedbacksSchema;
