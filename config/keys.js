// NODE_ENV : heroku node environnement variable = production mode 
if(process.env.NODE_ENV === 'production'){
  //  we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  //  we are in developement - return the dev set of keys
  module.exports = require('./dev');
}


