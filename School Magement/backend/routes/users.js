const express = require('express');
const router = express.Router();


const UsersController = require('../controller/users.js');

router.post('/post/signup', 	UsersController.signup);
router.post('/post/login', 	UsersController.login);
router.post('/post/forgotpassword', UsersController.forgotpassword);

module.exports = router;
