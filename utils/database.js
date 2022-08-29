const { Sequelize } = require('sequelize');

const db = new Sequelize('newmk', 'root', null, {
    dialect: 'mysql',
    host: 'localhost'
}
)

db.authenticate().then(
    () => {
        console.log("Connection has been established successfully.");
    }
).catch((e) => {
    console.log(e);
})

module.exports = db;