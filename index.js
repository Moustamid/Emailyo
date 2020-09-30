// Express - MongoDB
const express = require('express');
const mongoose = require('mongoose');
// middlewares
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
// Models - services - configKeys
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');



mongoose.connect(keys.mongoURI);
const app = express();

// middlewares Starts: 
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
// middlewares End : 


// Routes :
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);



// PORTS : Developement & Production 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
