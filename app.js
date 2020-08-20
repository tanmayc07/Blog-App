require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const router = require("./routes/auth");
const authRoutes = require("./routes/auth")
const PORT = process.env.PORT;
const app = express();
  
app.use(express.static(__dirname + "./public"));
app.use(express.json());
app.post("/register",router);
app.use(authRoutes);
app.set("view engine", "ejs");
app.set("views", "./views");



app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
