const jwt = require('jsonwebtoken');
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
  
    // check json web token exists & is verified
    if (token) {
      jwt.verify(token,'Sem 5 project', (err, decodedToken) => {
        if (err) {
          console.log(err.message);
         
        } else {
          res.redirect('/');
        
        }
      });
    } else {
        next();
    }
  };
  
  
  
  module.exports = { checkUser };