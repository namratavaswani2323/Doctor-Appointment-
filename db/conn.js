const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set("strictQuery", false);

const mongodbconn = mongoose
  .connect("mongodb+srv://nvaswani2323:l5NJ5i25vyqAkWHp@cluster0.edrbmfs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {})
  .catch((error) => {
    return error;
  });

module.exports = mongodbconn;
