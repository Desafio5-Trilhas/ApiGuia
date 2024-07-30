const express = require('express');
const { verifyApiKey } = require('../middlewares/authMiddleware');
const missaoConcluidaController = require('../controllers/missaoConcluidaController');

const routes = express.Router();

routes.post(
  '/api/missao-concluida',
  verifyApiKey,
  missaoConcluidaController.createCompletedQuest,
);
routes.get(
  '/api/missao-concluida/:id_usuario',
  verifyApiKey,
  missaoConcluidaController.findCompletedQuestById,
);

module.exports = routes;
