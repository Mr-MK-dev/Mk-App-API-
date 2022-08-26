let postController = require('../controller/postController')
let express = require('express');
let Router = express.Router();
Router.route('/post')
    .get(postController.getPosts)
    .post(postController.postPost)
    .patch(postController.updatePost)
Router.route('/post/:id')
    .delete(postController.delPost)


module.exports = Router