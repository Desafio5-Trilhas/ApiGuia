const express = require('express');
const missaoController = require('../controllers/missaoController');
const { verifyApiKey } = require('../middlewares/authMiddleware');
const routes = express.Router();

routes.post('/api/missao', verifyApiKey, missaoController.createQuestion);
routes.get('/api/missao', verifyApiKey, missaoController.findQuestions);
routes.get(
  '/api/missao/:id_missao',
  verifyApiKey,
  missaoController.findQuestionById,
);
routes.get(
  '/api/missao/:id_destino',
  verifyApiKey,
  missaoController.findQuestionByDestinationId,
);
routes.put('/api/missao', verifyApiKey, missaoController.updateDataQuestion);
routes.delete(
  '/api/missao/:id',
  verifyApiKey,
  missaoController.deleteQuestionById,
);

module.exports = routes;
