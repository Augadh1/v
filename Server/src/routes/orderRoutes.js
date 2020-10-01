const express = require("express");
const {
  pastOrderController,
  addOrderController,
} = require("../controller/feedbackController");

let orderRouter = express.Router();

orderRouter.put("/pastorder", pastOrderController);

orderRouter.post("/Order", addOrderController);

module.exports = orderRouter;
