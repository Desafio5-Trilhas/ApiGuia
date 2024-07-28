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
  '/api/usuario/signup',
  verifyApiKey,
  createUserValidator,
  validateData,
  userController.createUser,
);
routes.post(
  '/api/usuario/login',
  verifyApiKey,
  loginValidator,
  validateData,
  userController.login,
);
routes.get('/api/usuario/:email', verifyApiKey, userController.findUserByEmail);
routes.get('/api/usuario', verifyApiKey, userController.findAllUsers);
routes.put(
  '/api/usuario/:email',
  verifyApiKey,
  userController.atualizaDadosUser,
);
routes.delete('/api/usuario', verifyApiKey, userController.deleteUser);

module.exports = routes;
