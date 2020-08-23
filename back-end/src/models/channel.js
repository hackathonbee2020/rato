const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) =>{
  const Channel = sequelize.define('Channel', {
    channelId: DataTypes.UUID,
    name: DataTypes.STRING,
    clientId: DataTypes.UUID,
  });
  
  Channel.removeAttribute('id');

  Channel.beforeValidate(channel => channel.channelId = uuidv4());

  return Channel;
}
