const jwt = require('jsonwebtoken');
const secret = process.env.JWT;
const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token,secret, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/auth/login');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/auth/login');
  }
};


module.exports = { requireAuth };