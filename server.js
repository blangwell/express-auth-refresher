require('dotenv').config();
const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
const PORT = process.env.PORT;

const app = express();

app.set('view engine', 'ejs');

app.use('/auth', require('./controllers/auth'));

app.get('/', (req, res) => {
  res.send('home hit');
});

app.get('/profile', (req, res) => {
  res.send('profile page');
});

app.listen(PORT, () => console.log(`running on port ${PORT}`))