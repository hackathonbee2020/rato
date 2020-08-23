const {
  INTERNAL_SERVER_ERROR,
} = require('@lib/toolkit/http-exceptions');
const { ParticipationService } = require('@services/participation.service');

class ParticipationsController {
  constructor (
    participationService = new ParticipationService(),
  ) {
    this.participationService = participationService;
  }

  async join(req, res, next) {
    try {
      const { body } = req;

      await this.participationService.join(body);

      return res.status(204).end();
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async modify(req, res, next) {
    try {
      const { body } = req;

      await this.participationService.modify(body);

      return res.status(204).end();
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }

  async leave(req, res, next) {
    try {
      const { params: { conversationId, userId } } = req;

      await this.participationService.leave(conversationId, userId);

      return res.status(204).end();
    } catch (error) {
      console.error(`${req.method} ${req.path}, ${error}`);
      return next(INTERNAL_SERVER_ERROR);
    }
  }
}

module.exports = {
  ParticipationsController,
};