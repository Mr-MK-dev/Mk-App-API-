const express = require('express')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const app = express()
const morgan = require('morgan')
const dbUser = require('./models/user')
const dbPost = require('./models/posts')
const sql = require('./utils/database')

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(morgan('dev'))

app.use(authRoute)
app.use(userRoute)



dbPost.belongsTo(dbUser, { constraints: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
dbUser.hasMany(dbPost)


sql.sync({ force: true }).then(
    result => {
        console.log('Connected sync');
    }
).catch(err => {
    console.log(err);
})




app.listen(3000, () => {
    console.log(`Gonna run`);
})