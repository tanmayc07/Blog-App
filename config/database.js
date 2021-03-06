const mongoose = require("mongoose");
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

mongoose.set("returnOriginal", false);

const conn = mongoose.connection;

conn.on("connected", function () {
  console.log("Database is connected successfully!");
});

conn.on("disconnected", function () {
  console.log("Database is disconnected successfully!");
});

conn.on("error", console.error.bind(console, "connection error:"));

module.exports = conn;
