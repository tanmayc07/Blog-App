const jwt = require('jsonwebtoken');
const secret = process.env.JWT;
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token,secret, (err, decodedToken) => {
        if (err) {
          console.log(err.message);
        } else {
          res.redirect('/blogs/explore');
        }
      });
    } else {
        next();
    }
  };
  
  
  
  module.exports = { checkUser };