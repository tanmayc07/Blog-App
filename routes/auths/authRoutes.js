const routes= require("express").Router();
const authController = require("../../controllers/authControllers");
const { checkUser } = require("../../middleware/redirectMiddleware");
const { requireAuth } = require("../../middleware/authMiddleware");

routes.route("/login").get(checkUser,authController.login_get);
routes.route("/login").post( authController.login_post);
routes.route("/register").get(checkUser,authController.register_get);
routes.route("/register").post(authController.register_post);
routes.route("/logout").get(authController.logout_get);
module.exports = routes;
