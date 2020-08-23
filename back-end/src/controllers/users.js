const {
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  UNAUTHORIZED,
} = require('@lib/toolkit/http-exceptions');
const { UserService } = require('@services/user.service');

class UsersController {
  constructor (
    userService = new UserService(),
  ) {
    this.userService = userService;
  }

  async authenticate(req, res, next) {
    try {
      const { body } = req;
      const authenticatedUser = await this.userService.authenticate(body);

      if (authenticatedUser) {
        return res.status(200).json(authenticatedUser);
      }

      return next(UNAUTHORIZED);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(req, res, next) {
    try {
      const users = await this.userService.findAll();

      return res.status(200).json(users);
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async findUserById(req, res, next) {
    const { userId } = req.params;

    try {
      const user = await this.userService.findUserById(userId);

      if (!user) return next(NOT_FOUND);

      res.status(200).json(user);
    } catch (error) {
      console.error(`${req.method} ${req.path}, '${userId}', ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async upsert(req, res, next) {
    const { body: user } = req;

    try {
      const result = await this.userService.upsert(user);

      return res.status(201).json(result);
    } catch (error) {
      console.error(`${req.method} ${req.path}, '${user.userId}', ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = {
  UsersController,
};