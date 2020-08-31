const routes = require("express").Router();
const ctrIndex = require("../controllers/index.controllers");
const blogController = require("../controllers/blogcrud.controllers");

routes.route("/").get(ctrIndex.Index);

routes.route("/create").post(blogController.createData);
routes.route("/list").get(blogController.listData);
routes.route("/updateblog").post(blogController.updateData);
routes.route("/deleteblog").post(blogController.deleteData);

module.exports = routes;
