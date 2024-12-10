const express = require('express');
const AuthController = require('../controllers/authController');
const UserController = require('../controllers/userController');

const router = express.Router();

router.post('/register', AuthController.register);

router.post('/login', AuthController.login);

router.get('/users', UserController.index);

module.exports = router;