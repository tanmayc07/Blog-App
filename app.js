require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const blogRoutes = require("./routes/blogs/blogRoutes");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
app.use("/blogs", blogRoutes);

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
