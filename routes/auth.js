const router = require("express").Router();
const authController = require("../Controller/authController")

const mongoose = require("mongoose")

router.get("/", (req, res) => {
  res.render("home.ejs", { title: "RAHUL" });
});

router.get("/login",authController.login_get);
router.post("/login",authController.login_post);

router.get("/register",authController.register_get);
router.post("/register",authController.register_post);


module.exports = router;