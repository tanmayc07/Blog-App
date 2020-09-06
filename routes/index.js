const routes = require("express").Router();
const ctrIndex = require("../controllers/index.controllers");
const blogController = require("../controllers/blogcrud.controllers");
const authController = require("../controllers/auth.controllers")
const { requireAuth } = require("../middleware/authMiddleware")


routes.route("/").get(ctrIndex.Index);

routes.route("/create").get(blogController.createForm);
routes.route("/create").post(blogController.createData);
routes.route("/list").get(blogController.listData);
routes.route("/updateblog").post(blogController.updateData);
routes.route("/deleteblog").post(blogController.deleteData);

routes.route("/login").get(authController.login_get);
routes.route("/login").post(authController.login_post);
routes.route("/register").get(authController.register_get);
routes.route("/register").post(authController.register_post);

module.exports = routes;
