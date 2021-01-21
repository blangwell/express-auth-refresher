require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT;
const session = require('express-session');

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}));

app.use('/auth', require('./routes/auth'));

app.use(session({
  'secret': 'myNameisBigTallmn420'
}))

function reqLog(req, res, next) {
  req.log = function(out) {
    console.log(out);
    console.log(Date.now());
  }
  next();
}

app.use('*', reqLog)

app.get('/', (req, res) => {
  console.log(req.session)
  req.log('a test message')
  res.render('home');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(PORT, () => console.log(`running on port ${PORT}`))