const Twit = require("twit");
const config = require("./config/config");
const T = new Twit(config.twitterApp);

module.exports = T;
