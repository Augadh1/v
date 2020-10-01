const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const bodyParser = require("body-parser");
const setupDatabaseConnection = require("./util/setupDatabaseConnection");
const { orderSchema } = require("./schemas/orderSchema");
const userRoutes = require("./routes/userRoutes");
const feedbackRoutes = require("./routes/feedbackRouter");
const vmRoutes = require("./routes/vmRoutes");
const result = require("dotenv").config();
if (result.error) {
  throw result.error;
}

setupDatabaseConnection();

const Order = mongoose.model("Order", orderSchema);

server.use(express.static("build"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(cors());
server.use("/", userRoutes);
server.use("/", feedbackRoutes);
server.use("/", vmRoutes);

server.get("/pastorder?:id", function (req, res) {
  console.log(req.params.id);
  Order.find({ uid: req.params.id }, function (err, docs) {
    if (err) {
      res.json(err);
    } else {
      res.json(docs);
    }
  });
});

server.get("/sumary", function (req, res) {
  Order.find(
    {
      date: {
        $gt: "2019-12-01T00:00:00.000Z",
      },
    },
    function (err, docs) {
      if (err) {
        res.json(err);
      } else {
        console.log(docs.length);
        var i,
          sum = 0,
          coffee = 0,
          tea = 0,
          water = 0;
        for (i = 0; i < docs.length; i++) {
          sum = sum + docs[i].totalprice;
          if (docs[i].item.name == "Coffee") {
            coffee = coffee + docs[i].totalprice;
          }
          if (docs[i].item.name == "Tea") {
            tea = tea + docs[i].totalprice;
          }
          if (docs[i].item.name == "Water") {
            water = water + docs[i].totalprice;
          }
        }
        console.log(sum);
        res.json({ sum: sum, coffee: coffee, tea: tea, water: water });
      }
    }
  );
});

server.get("/sumarydays", function (req, res) {
  Order.find(
    {
      date: {
        $gt: "2019-12-04T00:00:00.000Z",
      },
    },
    function (err, docs) {
      if (err) {
        res.json(err);
      } else {
        console.log(docs.length);
        var i,
          sum = 0,
          coffee = 0,
          tea = 0,
          water = 0;
        for (i = 0; i < docs.length; i++) {
          sum = sum + docs[i].totalprice;
          if (docs[i].item.name == "Coffee") {
            coffee = coffee + docs[i].totalprice;
          }
          if (docs[i].item.name == "Tea") {
            tea = tea + docs[i].totalprice;
          }
          if (docs[i].item.name == "Water") {
            water = water + docs[i].totalprice;
          }
        }
        console.log(sum);
        res.json({ sum: sum, coffee: coffee, tea: tea, water: water });
      }
    }
  );
});

server.post("/payment", (req, res, next) => {
  var status = false;
  console.log("hello");
  console.log(req.body.data);
  const stripe = require("stripe")(
    "sk_test_WflBW00YpPBYGH3TdU4RSalL00x8TNUzBp"
  );
  stripe.charges.create(
    {
      amount: req.body.amount,
      currency: "in",
      source: req.body.data,
      description: "Charge for jenny.rosen@example.com",
    },
    function (err, charge) {
      if (err) {
        console.log(err);
      }
      var val = Math.floor(10000 + Math.random() * 90000);
      var obj = {};
      obj["code"] = val;
      console.log("qwertyuioasdfghjkl");
      res.send(obj);
    }
  );
  console.log("-------------------------------------------------");
  stripe.balance.retrieve(function (err, balance) {
    if (err) console.log(err);
    console.log("hello", balance, "qwerty");
  });
});

server.use((error, req, res, next) => {
  res.status(404);
  res.json({ error: { message: error.message } });
});

server.listen(8080, function () {
  console.log("server started");
});
