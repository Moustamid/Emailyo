const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requiredLogin =  require('../middlewares/requiredLogin');

module.exports = app => {

  app.post('/api/stripe' , requiredLogin , async ( req , res ) => {
     
    const charge = await stripe.charges.create({
      amount:500,
      currency: 'usd',
      source: req.body.id,
      description:'$5 for 5 credits'
    } );
    
    // Current user : initilased by Passport 
    req.user.credits += 5;
    // Persiste the user to the database
    const user = await req.user.save();
    // Sending the Updated User to the Browser
    res.send(user);

  } );

};










/*
 # Notes : 

 - Stripe libreries ::  BackEnd : stripe - Front End : checkout 

 -  Requiests Bodyes in Express :  bodyParser
      # anatomy of an HTTP transaction in Node.js.
      # the Request Payload will be parsed (availebel in our App) ,
        for any Requiests that have a body : POST , ....

*/ 