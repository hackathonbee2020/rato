const {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
} = require('@lib/toolkit/http-exceptions');
const { ConversationService } = require('@services/conversation.service');

class ConversationsController {
  constructor (
    conversationService = new ConversationService(),
  ) {
    this.conversationService = conversationService;
  }

  async upsert(req, res, next) {
    try {
      const { body } = req;
      const result = await this.conversationService.upsert(body);

      return res.status(201).json(result);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(req, res, next) {
    try {
      const { body } = req;
      const results = await this.conversationService.findAll(body);

      return res.status(200).json(results);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async findConversationById(req, res, next) {
    try {
      const { params: { conversationId } } = req;
      const conversation = await this.conversationService.findConversationById(conversationId);

      if (!conversation) return next(NOT_FOUND);

      return res.status(200).json(conversation);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = {
  ConversationsController,
};