const { URLSearchParams } = require('url');

const { TalkJSClient } = require('@clients/talkjs.client');

class ConversationRepository {
  constructor (
    talkJSClient = new TalkJSClient(),
  ) {
    this.talkJSClient = talkJSClient;
  }

  async upsert(conversationId, payload) {
    try {
      const uri= `conversations/${conversationId}`;

      return this.talkJSClient.request('PUT', uri, payload);
    } catch (error) {
      console.error(`Error creating/updating conversation: ${error}`);
      throw error;
    }
  }

  async findAll(limit, startingAfter) {
    try {
      const params = new URLSearchParams({
        ...(limit && { limit }),
        ...(startingAfter && { startingAfter }),
      });
      const uri = `conversations?${params.toString()}`;

      return this.talkJSClient.request('GET', uri);
    } catch (error) {
      console.error(`Error fetching conversations: ${error}`);
      throw error;
    }
  }

  async findConversationById(conversationId){
    try {
      const uri= `conversations/${conversationId}`;

      return this.talkJSClient.request('GET', uri);
    } catch (error) {
      console.error(`Error fetching conversation: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  ConversationRepository,
};