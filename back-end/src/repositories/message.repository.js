const { TalkJSClient } = require('@clients/talkjs.client');

class MessageRepository {
  constructor (
    talkJSClient = new TalkJSClient(),
  ) {
    this.talkJSClient = talkJSClient;
  }

  async send(conversationId, messages) {
    try {
      const uri = `conversations/${conversationId}/messages`;

      return this.talkJSClient.request('POST', uri, messages);
    } catch (error) {
      console.error(`Error sending messages to conversation: ${error}`);
      throw error;
    }
  }

  async findMessagesByConversationId(conversationId) {
    try {
      const uri = `conversations/${conversationId}/messages`;
      
      return this.talkJSClient.request('GET', uri);
    } catch (error) {
      console.error(`Error finding messages: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  MessageRepository,
};