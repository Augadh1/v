const { vmSchema } = require("../schemas/vmSchema");
const mongoose = require("mongoose");

const VmSchema = mongoose.model("VmSchema", vmSchema);

exports.vmMachineController = (req, res) => {
  console.log(req.body);
  let vmdata = new VmSchema();
  (vmdata.orderid = req.body.orderid),
    (vmdata.code = req.body.code),
    (vmdata.status = req.body.status);
  vmdata.save(function (err, doc) {
    if (!err) {
      res.json(doc);
    } else {
      console.log("adduser");
    }
  });
};

exports.serveController = (req, res) => {
  console.log(req.body);
  VmSchema.findOneAndUpdate(
    { code: req.body.code },
    {
      $set: {
        status: "completed",
      },
    },
    { new: true },
    function (err, docs) {
      if (err) {
        res.json("Something went wrong");
      } else {
        let data = {};
        console.log(docs.status);
        if (docs.status == "completed") {
          data.avail = true;
        }
        res.json(data);
      }
    }
  );
};
