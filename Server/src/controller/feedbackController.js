const { feedbacksSchema } = require("../schemas/feedbacksSchema");
const { sendEmailNotification } = require("../util/sendEmailNotification");
const mongoose = require("mongoose");

const Feedback = mongoose.model("Feedback", feedbacksSchema);
exports.addFeedbackController = (req, res) => {
  console.log(req.body);
  let feedback = new Feedback();
  feedback.uid = req.body.uid;
  feedback.username = req.body.username;
  feedback.comment = req.body.comment;
  feedback.save(function (err, doc) {
    if (!err) {
      res.json(doc);
    } else {
      sendEmailNotification(req.body.email, "reviewEmailNotification");
      console.log("adduser");
    }
  });
};

exports.getFeedbackController = (req, res) => {
  Feedback.find({}, function (err, docs) {
    if (err) {
      res.json(err);
    } else {
      console.log(docs);
      res.json(docs);
    }
  });
};
