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
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect('/auth/login');
  }
};

const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;

  // check json web token exists & is verified
  if (token) {
    jwt.verify(token,'Sem 5 project', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/');
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    next();
  }
};



module.exports = { checkUser };
module.exports = { requireAuth };