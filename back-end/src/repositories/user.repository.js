const { TalkJSClient } = require('@clients/talkjs.client');
const { User } = require('@models');

class UserRepository {
  constructor (
    talkJSClient = new TalkJSClient(),
  ) {
    this.talkJSClient = talkJSClient;
    this.attributes = [
      ['userId', 'id'],
      'name',
      'email',
      'password',
      'phone',
      'isAgent',
    ];
  }

  async findUserById(userId) {
    try {
      return User.findOne({
        attributes: this.attributes,
        where: {
          userId,
        },
      });
    } catch (error) {
      console.error(`Error fetching user: ${error}`);
      throw error;
    }
  }

  async findUserByEmail(email) {
    try {
      return User.findOne({
        attributes: this.attributes,
        where: {
          email,
        },
      });
    } catch (error) {
      console.error(`Error fetching user: ${error}`);
      throw error;
    }
  }

  async findAll() {
    try {
      const uri = `users`;

      return this.talkJSClient.request('GET', uri);
    } catch (error) {
      console.error(`Error fetching users: ${error}`);
      throw error;
    }
  }

  async upsert(user) {
    try {
      const { name, email, phone } = user;
      await User.upsert(user);
      const result = await this.findUserByEmail(email);
      const { id } = result.toJSON();

      await this._upsert(id, { name, email: [email], phone: [phone] });

      return result.toJSON();
    } catch (error) {
      console.error(`Error creating an user: ${error}`);
      throw error;
    }
  }

  async _upsert(userId, payload) {
    try {
      const uri = `users/${userId}`;

      return this.talkJSClient.request('PUT', uri, payload);
    } catch (error) {
      console.error(`Error inserting or updating the user: ${error}`);
      throw error;
    }
  }
}

module.exports = {
  UserRepository,
};