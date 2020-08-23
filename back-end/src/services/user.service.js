const { UserRepository } = require('@repositories/user.repository');

class UserService {
  constructor (
    userRepository = new UserRepository(),
  ) {
    this.userRepository = userRepository;
  }

  async authenticate(user) {
    const { email, password } = user;

    try {
      const result = await this.userRepository.findUserByEmail(email);

      if (result) {
        const { password: currentPassword } = result.get();

        return password === currentPassword ? result.toJSON() : false;
      }

      return false;
    } catch (error) {
      console.error(`Error authenticating user ${email}: ${error}`);
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.findAll();

      return users;
    } catch (error) {
      console.error(`Error fetching users: ${error}`);
      throw error;
    }
  }

  async findUserById(userId) {
    try {
      const user = await this.userRepository.findUserById(userId);

      return user;
    } catch (error) {
      console.error(`Error fetching user: ${error}`);
      throw error;
    }
  }

  async upsert(user) {
    try {
      const result = await this.userRepository.upsert(user);

      return result;
    } catch (error) {
      console.error(`Error fetching user: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  UserService,
};