const db = require('../utils/database');
const Sequelize = require('sequelize')


const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING
})

module.exports = User;