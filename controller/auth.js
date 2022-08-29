
let utils = require('../utils/auth');
const User = require('../models/user')


exports.signup = (req, res) => {

    const { fisrt_name, last_name, username, email, role_id, password, gender_id } = req.body

    User.create(
        {
            first_name: fisrt_name,
            last_name: last_name,
            username: username,
            email: email,
            role_id: role_id,
            password: password,
            gender_id: gender_id
        }
    ).then(result => {
        res.json({
            result
        });
    }).catch(
        error => {
            res.json(
                {
                    status: 'fail',
                    message: error
                }
            )
        }
    )
}


exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    sqlUser = connection.execute(`SELECT username FROM signup where id = 65`).then(result => { console.log(result); }).catch(
        error => {
            console.log(err);
        }
    )
    sqlPass = connection.execute(`SELECT password FROM signup where id = 65`).then(result => { return result }).catch(
        error => {
            console.log(err);
        }
    )
    console.log(sqlUser);
    if (username == sqlUser && password == sqlPass) {
        res.send('Logged in')
    } else {
        res.send('piss off')
    }

}