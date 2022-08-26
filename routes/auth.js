let express = require('express');
let Router = express.Router();
let authController = require('../controller/auth');

Router.route('/signup').post(authController.signup)

module.exports = Router;