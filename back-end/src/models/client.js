const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) =>{
  const Client = sequelize.define('Client', {
    clientId: DataTypes.UUID,
    name: DataTypes.STRING,
  });
  
  Client.removeAttribute('id');

  Client.beforeValidate(client => client.clientId = uuidv4());

  return Client;
}
