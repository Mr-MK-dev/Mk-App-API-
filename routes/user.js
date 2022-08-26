let postController = require('../controller/postController')
let express = require('express');
let Router = express.Router();
Router.route('/post')
    .get(postController.getPosts)
    .post(postController.postPost)
Router.route('/post/:id')
    .delete(postController.delPost)
    .patch(postController.updatePost)



module.exports = Router