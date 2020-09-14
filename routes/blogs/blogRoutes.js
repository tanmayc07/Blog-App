const routes = require("express").Router();
const blogController = require("../../controllers/blogcrud.controllers");
const { requireAuth } = require("../../middleware/authMiddleware");

routes.all("*", requireAuth);

routes.route("/list").get(blogController.listAll);
routes.route("/blog").get(blogController.listData);

routes.route("/create").get(blogController.createForm);
routes.route("/create").post(blogController.createData);

routes.route("/updateblog").post(blogController.updateData);
routes.route("/deleteblog").post(blogController.deleteData);

module.exports = routes;
