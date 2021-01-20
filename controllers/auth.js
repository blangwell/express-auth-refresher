const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('This the sign up page');
});

router.post('/signup', (req, res) => {
  console.log('Post to Signup Page');
});

router.get('/login', (req, res) => {
  res.send('This the login page');
});

router.post('/login', (req, res) => {
  console.log('Post to Login page');
});

router.get('/logout', (req, res) => {
  res.send('Logout goes here');
});

module.exports = router;