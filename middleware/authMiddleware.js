const jwt = require('jsonwebtoken');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token,'Sem 5 project', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/auth/login');
      } else {
        req.userid = decodedToken.id
        next();
      }
    });
  } else {
    res.redirect('/auth/login');
  }
};

module.exports = { requireAuth };