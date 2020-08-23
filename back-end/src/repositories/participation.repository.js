const { TalkJSClient } = require('@clients/talkjs.client');

class ParticipationRepository {
  constructor (
    talkJSClient = new TalkJSClient(),
  ) {
    this.talkJSClient = talkJSClient;
  }

  async join(conversationId, userId, payload) {
    try {
      const uri = `conversations/${conversationId}/participants/${userId}`;

      return this.talkJSClient.request('PUT', uri, payload);
    } catch (error) {
      console.error(`Error joining participation: ${error}`);
      throw error;
    }
  }

  async modify(conversationId, userId, payload) {
    try {
      const uri = `conversations/${conversationId}/participants/${userId}`;

      return this.talkJSClient.request('PATCH', uri, payload);
    } catch (error) {
      console.error(`Error modifying participation: ${error}`);
      throw error;
    }
  }

  async leave(conversationId, userId){
    try {
      const uri = `conversations/${conversationId}/participants/${userId}`;

      return this.talkJSClient.request('DELETE', uri);
    } catch (error) {
      console.error(`Error leaving participation: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  ParticipationRepository,
};