const { env } = require("process");

module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
});
