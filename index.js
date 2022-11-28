const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('req-flash');
const path = require('path');
const app = express();

const loginRoutes = require('./src/routes/router-login');
const registerRouter = require('./src/routes/router-register');
const appRouter = require('./src/routes/router-app');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configurasi session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'kancilciliq',
    cookie: {
        sameSite: true,
        maxAge: 60000
    }
}));

app.use(flash());

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', appRouter);
app.use('/login', loginRoutes);
app.use('/register', registerRouter);

app.listen(3000, () => {
    console.log('server menyala')
})