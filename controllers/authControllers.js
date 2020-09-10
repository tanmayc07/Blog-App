var User = require("../models/User");
const conn = require("../config/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
<<<<<<< HEAD
  
=======
  console.log(err.message, err.code);
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
  let errors = { email: '', password: '' };

  // incorrect email
  if (err.message === 'incorrect email') {
    errors.email = 'That email is not registered';
<<<<<<< HEAD
   
=======
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
  }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
<<<<<<< HEAD
    
  }
  if(err.message === 'user validation failed: password: Minimum password length is 6'){
    errors.password = 'Minimum 6 characters required';
  }
  console.log(errors.password);
  return errors
=======
  }
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
}

module.exports.register_get = (req, res) => {
  res.render("register");
}

module.exports.login_get = (req, res) => {
  res.render("login");
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id)=>{
  return jwt.sign({ id },'Sem 5 project',{
    expiresIn: maxAge
  });
};

module.exports.register_post = async (req, res) => {
  const { firstname,lastname,email,username,password,gender,DOB } = req.body;
  console.log(req.body);
  try {
    const user = await User.create({firstname,lastname,email,username, password ,gender,DOB});
<<<<<<< HEAD
    
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({errors})
=======
  }
  catch(err) {
    const errors = handleErrors(err);
    res.status(400).json({});
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de
  }
 
}
module.exports.login_post = async (req, res) => {
  const email = req.body.email 
  const password = req.body.password

  try{
    const user = await User.login(email,password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({user: user._id})
    
  }
  catch(err){
    const errors = handleErrors(err);
<<<<<<< HEAD
    res.status(400).json({ errors });
=======
    res.status(400).json({});
>>>>>>> 3bbe05c66caeda391f12bbab2a9c89750ec103de

  }
 
}
