require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(express.urlencoded({extended: false}));


app.use('/auth', require('./routes/auth'));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/profile', (req, res) => {
  res.render('profile');
});

app.listen(PORT, () => console.log(`running on port ${PORT}`))