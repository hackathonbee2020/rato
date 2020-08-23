require('dotenv').config();
const getEnv = require('getenv');

module.exports = {
  database: getEnv.string('DB_DATABASE'),
  dialect: getEnv.string('DB_DIALECT'),
  host: getEnv.string('DB_HOST'),
  password: getEnv.string('DB_PASSWORD'),
  port: getEnv.string('DB_PORT'),
  username: getEnv.string('DB_USERNAME'),
};