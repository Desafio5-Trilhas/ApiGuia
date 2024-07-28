const express = require('express');
const userController = require('../controllers/usuarioController.js');
const {
  createUserValidator,
  loginValidator,
} = require('../validator/validators.js');
const {
  verifyApiKey,
  verifyToken,
  validateData,
} = require('../middlewares/authMiddleware.js');

const routes = express.Router();

routes.post(
  '/api/users/signup',
  verifyApiKey,
  createUserValidator,
  validateData,
  userController.createUser,
);
routes.post(
  '/api/users/login',
  verifyApiKey,
  loginValidator,
  validateData,
  userController.login,
);
routes.get('/api/users/:email', verifyApiKey, userController.findUserByEmail);
routes.get('/api/users', verifyApiKey, userController.findAllUsers);
routes.put('/api/users/:email', verifyApiKey, userController.atualizaDadosUser);
routes.delete('/api/users', verifyApiKey, userController.deleteUser);

module.exports = routes;
