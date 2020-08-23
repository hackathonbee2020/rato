const { MessageRepository } = require('@repositories/message.repository');

class MessageService {
  constructor (
    messageRepository = new MessageRepository(),
  ) {
    this.messageRepository = messageRepository;
  }

  async send(payload) {
    try {
      const { conversationId, messages } = payload;

      return this.messageRepository.send(conversationId, messages);
    } catch (error) {
      console.error(`Error sending messages to conversation: ${error}`);
      throw error;
    }
  }

  async findMessagesByConversationId(conversationId) {
    try {
      return this.messageRepository.findMessagesByConversationId(conversationId);
    } catch (error) {
      console.error(`Error fetching conversation messages: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  MessageService,
};