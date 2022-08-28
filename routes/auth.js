let express = require('express');
let Router = express.Router();
let authController = require('../controller/auth');

Router.route('/signup').post(authController.signup)
Router.route('/login').post(authController.login)

module.exports = Router;