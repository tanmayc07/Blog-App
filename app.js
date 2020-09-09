require("dotenv").config();
const routes = require("express").Router();
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/blogs/blogRoutes");
const authRoutes = require("./routes/auths/authRoutes");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT;
const { requireAuth } = require("./middleware/authMiddleware");
const Index  = require("./routes/Index");
const app = express();
  
app.use(express.static(__dirname + "./public"));
app.use(express.json());
app.post("/register",routes);
app.use(authRoutes);
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(cookieParser());
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);
app.use("/",Index);
 
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/home", requireAuth, (req, res) => {
  res.json("LOGGED IN");
}); 
  
app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
