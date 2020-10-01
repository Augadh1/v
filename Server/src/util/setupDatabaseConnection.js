const mongoose = require("mongoose");

let setupDatabaseConnection = () => {
  mongoose
    .connect(`mongodb://localhost:27017/${process.env.DATABASE}`, {
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((error) => {
      console.log("Connection failed!");
      console.log(error);
    });
};

module.exports = setupDatabaseConnection;