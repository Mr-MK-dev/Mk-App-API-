let express = require('express')
let userRoute = require('./routes/user')
let authRoute = require('./routes/auth')
let app = express()


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(authRoute)
app.use(userRoute)




app.listen(3000, () => {
    console.log(`Gonna run`);
})