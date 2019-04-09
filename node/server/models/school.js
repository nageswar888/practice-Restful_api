'use strict';
module.exports = (sequelize, DataTypes) => {
  const School = sequelize.define('School', {
    name: DataTypes.STRING,
    address: DataTypes.STRING
  }, {});
  School.associate = function(models) {
    // associations can be defined here
  };
  return School;
};