const Post = require('../models/posts')

exports.getPosts = async (req, res) => {
    try {
        const skipValue = req.query.page * 1 || 2;
        const limitValue = req.query.limit * 1 || 3;
        const data = await Post.findAll({ limit: limitValue })

        res.json({
            status: 'success',
            data:
                data

        })
    } catch (error) {
        console.log(error);
    }

}
exports.getPost = (req, res) => {
    const value = req.params.id * 1
    Post.findOne({ where: { id: value } })
        .then((result) => res.json({ data: result }))
        .catch(err => { console.log(err); })

}

exports.postPost = (req, res) => {
    const { description, imageUrl } = req.body
    Post.create(
        {
            description: description,
            imageUrl: imageUrl
        }
    )
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
    Post.destroy({ where: { id: value } })
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

    Post.update(req.body, { where: { id: theId } })
        .then((v) => {
            res.json({
                status: 'success',
                post_id: v
            })
        }).catch(err => { console.log(`${err}`); })


}
