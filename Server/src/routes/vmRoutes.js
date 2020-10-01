const express = require("express");
const {
  serveController,
  vmMachineController,
} = require("../controller/vmMachineController");

let vmRouter = express.Router();

vmRouter.post("/serve", serveController);

vmRouter.post("/vmmachine", vmMachineController);

module.exports = vmRouter;
