const routes = require("express").Router();
const blogController = require("../../controllers/blogcrud.controllers");

routes.route("/list").get(blogController.listData);

routes.route("/create").get(blogController.createForm);
routes.route("/create").post(blogController.createData);

routes.route("/updateblog").post(blogController.updateData);
routes.route("/deleteblog").post(blogController.deleteData);

module.exports = routes;