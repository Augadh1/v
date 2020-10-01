const express = require("express");
const {
  getFeedbackController,
  addFeedbackController,
} = require("../controller/feedbackController");

let feedbackRouter = express.Router();

feedbackRouter.get("/feedback", getFeedbackController);

feedbackRouter.post("/feedback", addFeedbackController);

module.exports = feedbackRouter;
