'use strict';
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Students', {
    name: DataTypes.STRING,
    marks: DataTypes.INTEGER
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
