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
 /* Clients side Routing for the Production . */
if(process.env.NODE_ENV === 'production') {
  
   /*
    # Route 3 :
    Express will (search) serve up production assets .
    like our main.js file or main.css file ! ,
    for any request it does not recognize . 
    it serve the assets in the build derectory .
   */
    app.use(express.static('client/build'));
   /*
    # Route 4 : Absolute Catsh all in our App :
    Express will serve up the index.html file , 
    if it does not recognize the Route .
   */ 
    const path = require('path');
    app.get('*' , (req , res) => {
      res.sendFile(  path.resolve( __dirname, 'client' , 'build' , 'index.html') );
    } );

}



// PORTS : Developement & Production 
const PORT = process.env.PORT || 5000;
app.listen(PORT);
