require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const cookieParser = require("cookie-parser")
const PORT = process.env.PORT;
const { requireAuth } = require("./middleware/authMiddleware")
const cors = require("cors")
const app = express();


app.use(cors());
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/home",requireAuth,(req,res)=>{
  res.json("LOGGED IN");
})

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});



