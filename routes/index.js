const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.render("home", { title: "Tanmay" });
});

module.exports = routes;
