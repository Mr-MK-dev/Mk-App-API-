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
  username: {
    type: Sequelize.STRING,
    unique: true,

  },

  email: {
    type: Sequelize.STRING,
    unique: [true, 'this isnot email'],
    // set(val) {
    //   return this.setDataValue('email', val + '@mk1.com')
    // }
    validate: {
      isEmail: true
    }

  },
  password: Sequelize.STRING,
  gender_id: {
    type: Sequelize.INTEGER,
    // defaultValue: 1,

  },

  role_id: {
    type: Sequelize.INTEGER,
    defaultValue: 1,

  }
}, {
  validate: {
    check() {
      const role = this.gender_id * 1
      if (role !== (1 || 2)) {
        throw new Error('select straight gender  GAY');
      }
    }
  }
})

User.ClassLevelMethod = function () {
  return 'The class 😋😎😎😍😍😘😘🥰'
}
module.exports = User;