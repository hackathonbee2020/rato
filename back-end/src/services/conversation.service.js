const { ConversationRepository } = require('@repositories/conversation.repository');

class ConversationService {
  constructor (
    conversationRepository = new ConversationRepository(),
  ) {
    this.conversationRepository = conversationRepository;
  }

  async upsert(payload) {
    try {
      const { conversationId, ...rest } = payload;

      return this.conversationRepository.upsert(conversationId, rest);
    } catch (error) {
      console.error(`Error creating/updating conversation: ${error}`);
      throw error;
    }
  }

  async findAll(options) {
    try {
      const { limit, startingAfter } = options;

      return this.conversationRepository.findAll(limit, startingAfter);
    } catch (error) {
      console.error(`Error fetching conversations: ${error}`);
      throw error;
    }
  }

  async findConversationById(conversationId) {
    try {
      return this.conversationRepository.findConversationById(conversationId);
    } catch (error) {
      console.error(`Error fetching conversation: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  ConversationService,
};