const express = require('express');
const { verifyApiKey, verifyToken } = require('../middlewares/authMiddleware');
const missaoConcluidaController = require('../controllers/missaoConcluidaController');

const routes = express.Router();

routes.post(
  '/api/missao-concluida',
  verifyApiKey,
  missaoConcluidaController.createCompletedQuest,
);
routes.get(
  '/api/missao-concluida/',
  verifyToken,
  verifyApiKey,
  missaoConcluidaController.findCompletedQuestById,
);

module.exports = routes;
