const User = require("../models/User");

module.exports.register_get = (req, res) => {
  res.render("registerpage");
}

module.exports.login_get = (req, res) => {
  res.render("loginpage");
}

module.exports.register_post = async (req, res) => {
  const { name , email, password} = req.body;
  
  try {
    const user = await User.create({name,email,password});
    res.status(201).json(user);  
  }
  catch(err) {
    console.log(err);
    res.status(400).send("error, user not created");
  }
  
}

module.exports.login_post = async(req, res) => {
  const{ email, password} = req.body;
  console.log(email);
  res.send("user login");
}