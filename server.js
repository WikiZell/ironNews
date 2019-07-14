require("dotenv").config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require("mongoose")
var cors = require("cors")
var session = require('express-session')
var logger = require('morgan');
var bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session);




mongoose.connect(process.env.DATABASE_CONNECT,{useNewUrlParser: true})
    .then(()=> {
        console.log("connected to mongo")
    })
    .catch((err)=> {
        console.log("not connected to mognod", err)
    })

var app = express();

app.use(cors({
    origin: ["http://localhost:3000", "localhost:3000"],
    credentials: true,
}))

const db = mongoose.connection

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: db }),
    cookie: {
        expires: 6000000
    }
  }))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



const setHeader = (req, res , next) => {
    res.set("Access-Control-Expose-Headers", "session")
    req.session.currentUser ? res.set("session", "true") : res.set("session", "false");
    next();
}


app.use('/api', setHeader, require('./routes/api'));
app.use('/auth', require('./routes/auth'));

app.listen(process.env.PORT,()=>{
    console.log("listening")
})

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
});

module.exports = app;