let connection = require('../connect');

exports.getPosts = (req, res) => {
    sql = 'SELECT * FROM posts;'
    connection.execute(sql)
        .then((result) => res.json({ data: result }))
        .catch(err => { console.log(err); })

}
exports.postPost = (req, res) => {
    const { content } = req.body
    let sql = 'INSERT INTO posts(id , content) values(?,?);';
    connection.execute(sql, [null, content])
        .then((theData) => {
            res.json({
                data: theData
            })
        }
        ).catch(
            err => {
                console.log(`${err}`);
            }
        )

}


exports.delPost = (req, res) => {
    const value = req.params.id * 1
    console.log(typeof value);
    sql = `DELETE from posts where id = ${value};`
    connection.execute(sql)
        .then((v) => {
            res.json({
                status: 'success',
                post_id: v
            })
        }).catch(err => { console.log(`${err}`); })

}



exports.updatePost = (req, res) => {
    const { content } = req.body
    const theId = req.params.id * 1
    console.log(typeof theId);
    sql = `update posts set content = '${content}'  where id = ${theId};`
    connection.execute(sql)
        .then((v) => {
            res.json({
                status: 'success',
                post_id: v
            })
        }).catch(err => { console.log(`${err}`); })


}
