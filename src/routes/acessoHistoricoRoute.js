const express = require('express');
const acessoHistoricoController = require('../controllers/acessoHistoricoController');
const { verifyApiKey, verifyToken } = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post(
  '/api/acesso-historico',
  verifyToken,
  verifyApiKey,
  acessoHistoricoController.createNewAcessRecords,
);
routes.get(
  '/api/acesso-historico/',
  verifyToken,
  verifyApiKey,
  acessoHistoricoController.findAcessRecordsById,
);

module.exports = routes;
