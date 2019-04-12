const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const flash = require('connect-flash');

const app = express();

// App configuration
app.set('view engine', 'ejs');
app.use(flash());

// MongoDB configuration
mongoose.connect('mongodb://localhost:27017/skatespots', { useNewUrlParser: true });

// Landing page
app.get('/', (req, res) => {
    res.render('index');
});

// Index page
app.get('/skateparks', (req, res) => {
    res.render('skateparks');
});

// User sign in and registration
app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/login', (req, res) => {
    res.render('login');
});

// App port
app.listen(3000, console.log('server has started!'));