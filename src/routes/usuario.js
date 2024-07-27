const express = require('express');
const userController = require('../controllers/usuario.js');

const routes = express.Router();

routes.get('/api/user/:email', userController.findUserByEmail);
routes.get('/api/user', userController.findAllUsers);
routes.put('/api/user', userController.atualizaDadosUser);
routes.delete('/api/user', userController.deleteUser);

module.exports = routes;
