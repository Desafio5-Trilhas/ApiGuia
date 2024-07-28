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
  '/api/user/signup',
  verifyApiKey,
  createUserValidator,
  validateData,
  userController.createUser,
);
routes.post(
  '/api/user/login',
  verifyApiKey,
  loginValidator,
  validateData,
  userController.login,
);
routes.get('/api/user/:email', verifyApiKey, userController.findUserByEmail);
routes.get('/api/user', verifyApiKey, userController.findAllUsers);
routes.put('/api/user/:email', verifyApiKey, userController.atualizaDadosUser);
routes.delete('/api/user', verifyApiKey, userController.deleteUser);

module.exports = routes;
