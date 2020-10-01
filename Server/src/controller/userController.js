const { sendEmailNotification } = require("../util/sendEmailNotification");
const { userSchema } = require("../schemas/userSchema");
const mongoose = require("mongoose");

const User = mongoose.model("User", userSchema);

exports.addUserController = (req, res) => {
  console.log(req.body);
  let user = new User();
  user.username = req.body.username;
  user.uid = req.body.uid;
  user.age = req.body.age;
  user.mobileno = req.body.mobileno;
  user.email = req.body.email;
  console.log("addUser");
  user.save(function (err, doc) {
    if (!err) {
      sendEmailNotification(req.body.email, "registerEmailNotification");
      res.json(doc);
    } else {
      console.log("adduser");
    }
  });
};

exports.searchUserController = (req, res) => {
  console.log(req.body.uid);
  User.findOne({ uid: req.body.uid }, function (err, docs) {
    if (err) {
      console.log("some error occure");
    } else {
      console.log(docs);
      res.json(docs);
    }
  });
};


exports.editUserController = (req, res) => {
  console.log(req.body);
  User.findByIdAndUpdate(
    req.body._id,
    {
      $set: {
        username: req.body.username,
        age: req.body.age,
        mobileno: req.body.mobileno,
      },
    },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json("Something went wrong");
      } else {
        res.json(docs);
      }
    }
  );
}