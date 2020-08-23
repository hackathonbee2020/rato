const router = require('express').Router();

const conversations = require('@routes/v1/conversations');
const messages = require('@routes/v1/messages');
const participations = require('@routes/v1/participations');
const users = require('@routes/v1/users');

router.use('/conversations', conversations);
router.use('/messages', messages);
router.use('/participations', participations);
router.use('/users', users);

module.exports = router;