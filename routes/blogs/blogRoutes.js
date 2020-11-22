const routes = require("express").Router();
const blogController = require("../../controllers/blogcrud.controllers");
const { requireAuth } = require("../../middleware/authMiddleware");

routes.all("*", requireAuth);

routes.route("/create").get(blogController.createForm);
routes.route("/create").post(blogController.createData);

routes.route("/explore").get(blogController.listAll);
routes.route("/myblogs").get(blogController.listMine);

routes.route("/filter/:tag").get(blogController.filterTags);
routes.route("/update/:id").get(blogController.getUpdate);
routes.route("/update/:id").post(blogController.updateData);
routes.route("/:id").delete(blogController.deleteData);
routes.route("/:id").get(blogController.listData);

module.exports = routes;
