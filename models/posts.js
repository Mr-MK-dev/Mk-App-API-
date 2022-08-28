const Sequelize = require('sequelize')
const db = require('../utils/database')

const Post = db.define('post', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
    },
    imageUrl: {
        type: Sequelize.STRING
    }
});

module.exports = Post;