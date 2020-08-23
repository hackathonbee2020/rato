const fetch = require('node-fetch');

const { talkJS } = require('@config');

class TalkJSClient {
  constructor(
    config = talkJS,
  ) {
    this.config = config;
  }

  async request(method, URI, payload) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.config.appSecretKey}`,
      },
      method,
    };

    if (payload) {
      options['body'] = JSON.stringify(payload);
    }
    
    const url =
      `https://${this.config.apiBase}/${this.config.apiVersion}/${this.config.appId}/${URI}`;
    const result = await fetch(url, options);

    return await result.json();
  }
}

module.exports = {
  TalkJSClient,
};