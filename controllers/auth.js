const db = require('../models')

exports.getSignup = (req, res) => {
  res.render('auth/signup');
};

exports.postSignup = (req, res) => {
  db.user.findOrCreate({
    where: {
      email: req.body.email
    },
    defaults: {
      name: req.body.name,
      password: req.body.password
    }
  })
  .then(([user, created]) => {
    res.send(`User: ${user.email}, Created: ${created}`);
  })
  .catch(err => {
    res.send(`There was an error finding or creating. Check the console!`);
    console.log(`Error finding/creating user ${err}`);
  })
};

exports.getLogin = (req, res) => {
  res.render('auth/login');
};

exports.postLogin = (req, res) => {
  db.user.findOne({
    where: {
      email: req.body.email,
      password: req.body.password
    }
  })
  .then(foundUser => {
    res.send(`We found the following user: ${foundUser.email}`);
  })
  .catch(err => {
    res.send(`There was an error logging in. Check the console!`);
    console.log(`Error logging user in: ${err}`);
  })
};

exports.getLogout = (req, res) => {
  res.render('auth/logout');
};