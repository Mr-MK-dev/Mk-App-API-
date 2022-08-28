const { Sequelize } = require('sequelize');

const db = new Sequelize('newmk', 'root', null, {
    dialect: 'mysql',
    host: 'localhost'
}
)

module.exports = db;