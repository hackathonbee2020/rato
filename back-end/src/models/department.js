const { v4: uuidv4 } = require('uuid');

module.exports = (sequelize, DataTypes) =>{
  const Department = sequelize.define('Department', {
    departmentId: DataTypes.UUID,
    name: DataTypes.STRING,
    channelId: DataTypes.UUID,
  });
  
  Department.removeAttribute('id');

  Department.beforeValidate(department => department.departmentId = uuidv4());

  return Department;
}