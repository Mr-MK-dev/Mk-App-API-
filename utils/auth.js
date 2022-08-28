


class UserRegister {

    constractor(fisrt_name, last_name, username, e_mail, password, role_id, gender_id) {
        this.fisrt_name = fisrt_name;
        this.last_name = last_name;
        this.username = username;
        this.e_mail = e_mail;
        this.password = password;
        this.role_id = role_id;
        this.gender_id = gender_id;
    }

    signUp() {
        // console.log(`All work`);
        let sql = 'INSERT into signup(id,fisrt_name,last_name,username,e_mail,password,role_id,gender_id) values (?,?,?,?,?,?,?,?);'
        connection.execute(sql,
            [null, this.fisrt_name, this.last_name, this.username, this.e_mail,
                this.password, this.role_id, this.gender_id])

    }


}

class Mk {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return console.log(`${this.name}`);
    }
}

class NewClass {
    constructor(age) {
        this.age = age;
    }
    sayAge() {
        return console.log(`${this.age}`);
    }
}

module.exports = { Mk, NewClass, UserRegister }