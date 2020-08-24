require("dotenv").config();
const express = require("express");
const routes = require("./routes");

const PORT = process.env.PORT;
const app = express();

app.use("/assets", express.static(__dirname + "/public"));
app.use("/", routes);

app.set("views", "./views");
app.set("view engine", "ejs");

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});
