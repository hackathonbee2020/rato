const { ParticipationRepository } = require('@repositories/participation.repository');

class ParticipationService {
  constructor (
    participationRepository = new ParticipationRepository(),
  ) {
    this.participationRepository = participationRepository;
  }

  async join(payload) {
    try {
      const { conversationId, userId, ...rest } = payload;

      return this.participationRepository.join(conversationId, userId, rest);
    } catch (error) {
      console.error(`Error joining participation: ${error}`);
      throw error;
    }
  }

  async modify(payload) {
    try {
      const { conversationId, userId, ...rest } = payload;

      return this.participationRepository.modify(conversationId, userId, rest);
    } catch (error) {
      console.error(`Error modifying participation: ${error}`);
      throw error;
    }
  }

  async leave(conversationId, userId) {
    try {
      return this.participationRepository.leave(conversationId, userId);
    } catch (error) {
      console.error(`Error leaving participation: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  ParticipationService,
};