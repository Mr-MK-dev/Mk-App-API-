let mySql = require('mysql2')


var mainConnection = mySql.createPool(
    {
        host: '127.0.0.1',
        user: 'root',
        database: 'newmk'
    }
)




module.exports = mainConnection.promise();