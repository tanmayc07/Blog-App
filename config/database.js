const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const conn = mongoose.connection;

conn.on("connected", function () {
  console.log("Database is connected successfully!");
});

conn.on("disconnected", function () {
  console.log("Database is disconnected successfully!");
});

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
