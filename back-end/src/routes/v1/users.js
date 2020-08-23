const router = require('express').Router();

const { UsersController } = require('@controllers/users');

const usersController = new UsersController();

router.get('/', (req, res, next) => usersController.findAll(req, res, next));
router.put('/', (req, res, next) => usersController.upsert(req, res, next));
router.get('/:userId', (req, res, next) => usersController.findUserById(req, res, next));
router.post('/auth', (req, res, next) => usersController.authenticate(req, res, next));

module.exports = router;