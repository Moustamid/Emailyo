const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  //  passport authenticate Middleware :
  app.get(
    '/auth/google/callback', 
     passport.authenticate('google') ,
     (req , res) => {
       // redirect : 
        res.redirect('/surveys');
     }
  );
  
  app.get('/api/logout' , (req, res) => {
    // kills automaticaly the id (Token) inside the cookie (AKI:user)
     req.logout();
    // redirect : 
     res.redirect('/');

  } );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
