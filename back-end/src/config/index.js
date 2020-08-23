require('dotenv').config();
const getEnv = require('getenv');

const server = {
  port: getEnv.int('SERVER_PORT'),
};

const talkJS = {
  apiBase: getEnv.string('TALKJS_API_BASE'),
  apiVersion: getEnv.string('TALKJS_API_VERSION'),
  appId: getEnv.string('TALKJS_APP_ID'),
  appSecretKey: getEnv.string('TALKJS_APP_SECRET_KEY'),
};

module.exports = {
  server,
  talkJS,
};