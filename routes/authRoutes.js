const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));
  
  app.get('/api/logout' , (req, res) => {
    // kills automaticaly the id inside the cookie (AKI:user)
     req.logout();
     res.send(req.user);
  } );

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
