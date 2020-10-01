const express = require("express");
const {
  addUserController,
  searchUserController,
  editUserController,
} = require("../controller/userController");

let userRouter = express.Router();

userRouter.put("/user/Edit", editUserController);

userRouter.put("/user", searchUserController);

userRouter.post("/addUser", addUserController);

module.exports = userRouter;
