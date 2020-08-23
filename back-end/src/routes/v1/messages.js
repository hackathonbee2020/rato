const router = require('express').Router();

const { MessagesController } = require('@controllers/messages');

const messagesController = new MessagesController();

router.post('/', (req, res, next) => messagesController.send(req, res, next));
router.get('/:conversationId', (req, res, next) => messagesController.findMessagesByConversationId(req, res, next));

module.exports = router;