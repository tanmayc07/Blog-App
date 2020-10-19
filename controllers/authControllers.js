var User = require("../models/user/User");
const conn = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const checkUser = require("../middleware/authMiddleware");

const handleErrors = (err) => {
  console.log(err.message);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "Incorrect Email") {
    errors.email = "That email is not registered";
  }

  // incorrect password
  if (err.message === "Incorrect Password") {
    errors.password = "That password is incorrect";
  }
  if (
    err.message === "user validation failed: password: Minimum 6 characters"
  ) {
    errors.password = "Minimum 6 characters required";
  }
  if (err.code === 11000) {
    errors.email = "That email is already taken";
  }

  return errors;
};


const redirect = (req, res) => {
  res.redirect("/auth/login");
};


module.exports.register_get = (req, res) => {
  res.render("register");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, "Sem 5 project", {
    expiresIn: maxAge,
  });
};

module.exports.register_post = async (req, res) => {
  const {
    firstname,
    lastname,
    email,
    username,
    password,
    gender,
    DOB,
  } = req.body;
  try {
    const user = await User.createUser({
      firstname,
      lastname,
      email,
      username,
      password,
      gender,
      DOB,
    });

    res.status(200).json({});
  } catch (err) {
    const errors = handleErrors(err);

    res.status(400).json({ errors });
  }
};
module.exports.login_post = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }

};

module.exports.logout_get = (req, res) => {
  res.cookie('jwt', '', { maxAge: 1 });
  res.redirect('/');
}

