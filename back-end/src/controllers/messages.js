const {
  INTERNAL_SERVER_ERROR,
} = require('@lib/toolkit/http-exceptions');
const { MessageService } = require('@services/message.service');

class MessagesController {
  constructor(
    messageService = new MessageService(),
  ) {
    this.messageService = messageService;
  }

  async send(req, res, next) {
    try {
      const { body } = req;
      const result = await this.messageService.send(body);

      return res.status(201).json(result);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async findMessagesByConversationId(req, res, next) {
    try {
      const { params: { conversationId } } = req;
      const messages = await this.messageService.findMessagesByConversationId(conversationId);

      res.status(200).json(messages);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = {
  MessagesController,
};