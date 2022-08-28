
let utils = require('../utils/auth');



exports.signup = (req, res) => {

    const { fisrt_name, last_name, username, e_mail, role_id, password, gender_id } = req.body

    let sql = 'INSERT into signup(id,fisrt_name,last_name,username,e_mail,password,role_id,gender_id) values (?,?,?,?,?,?,?,?);'

    connection.execute(sql, [null, fisrt_name, last_name, username, e_mail, password, role_id, gender_id])
        .then(result => {
            res.json({
                result
            });
        }).catch(
            error => {
                console.log(err);
            }
        )
}


exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    sqlUser = connection.execute(`SELECT username FROM signup where id = 65`).then(result => { console.log(result);  }).catch(
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