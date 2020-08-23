const router = require('express').Router();

const { ParticipationsController } = require('@controllers/participations');

const participationsController = new ParticipationsController();

router.put('/', (req, res, next) => participationsController.join(req, res, next));
router.patch('/', (req, res, next) => participationsController.modify(req, res, next));
router.delete('/:conversationId/:userId', (req, res, next) => participationsController.leave(req, res, next));

module.exports = router;