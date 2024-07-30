const express = require('express');
const acessoHistoricoController = require('../controllers/acessoHistoricoController');
const { verifyApiKey } = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post(
  '/api/acesso-historico',
  verifyApiKey,
  acessoHistoricoController.createNewAcessRecords,
);
routes.get(
  '/api/acesso-historico/:id_usuario',
  verifyApiKey,
  acessoHistoricoController.findAcessRecordsById,
);

module.exports = routes;
