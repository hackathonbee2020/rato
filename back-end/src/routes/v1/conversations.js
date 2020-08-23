const router = require('express').Router();

const { ConversationsController } = require('@controllers/conversations');

const conversationsController = new ConversationsController();

router.put('/', (req, res, next) => conversationsController.upsert(req, res, next));
router.post('/', (req, res, next) => conversationsController.findAll(req, res, next));
router.get('/:conversationId', (req, res, next) => conversationsController.findConversationById(req, res, next));

module.exports = router;