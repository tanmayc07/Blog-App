const routes = require("express").Router();
const blogController = require("../../controllers/blogcrud.controllers");
const { requireAuth } = require("../../middleware/authMiddleware");

routes.all("*", requireAuth);



routes.route("/create").get(blogController.createForm);
routes.route("/create").post(blogController.createData);

routes.route("/updateblog").post(blogController.updateData);
routes.route("/deleteblog").post(blogController.deleteData);

routes.route("/explore").get(blogController.listAll);
routes.route("/myblogs").get(blogController.listMine);

routes.route("/:id").get(blogController.listData);

module.exports = routes;
