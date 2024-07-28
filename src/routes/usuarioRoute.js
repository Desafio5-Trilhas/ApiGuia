const express = require('express');
const userController = require('../controllers/usuarioController.js');

const routes = express.Router();

routes.post('/api/user/signup', userController.createUser);
routes.post('/api/user/login', userController.login);
routes.get('/api/user/:email', userController.findUserByEmail);
routes.get('/api/user', userController.findAllUsers);
routes.put('/api/user/:email', userController.atualizaDadosUser);
routes.delete('/api/user', userController.deleteUser);

module.exports = routes;
