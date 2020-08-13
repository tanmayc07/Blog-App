const routes = require("express").Router();
const ctrIndex = require("../controllers/index.controllers");

routes.route("/").get(ctrIndex.Index);

module.exports = routes;
