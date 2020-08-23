const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userId: DataTypes.UUID,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.STRING,
    isAgent: DataTypes.BOOLEAN,
  });

  User.removeAttribute('id');

  User.beforeValidate(user => user.userId = uuidv4());

  User.prototype.toJSON =  function () {
    const values = Object.assign({}, this.get());
  
    delete values.password;
    
    return values;
  };

  return User;
};