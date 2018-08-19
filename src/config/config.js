var env = process.env.NODE_ENV || 'development';


if(env == 'development')
{
  var config = require('./config.json');
  var envConfig = config[env];
  Object.keys(envConfig).forEach((key) =>
  {
    process.env[key] = envConfig[key];
  });
}

const twitterApp =
{
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
};

module.exports =
{
  twitterApp,
  userName: process.env.USERNAME
};
