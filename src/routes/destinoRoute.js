const express = require('express');
const destinoController = require('../controllers/destinoController');
const { verifyApiKey } = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post(
  '/api/destino',
  verifyApiKey,
  destinoController.createNewDestination,
);
routes.get('/api/destino', verifyApiKey, destinoController.findDestinations);
routes.get(
  '/api/destino/:id',
  verifyApiKey,
  destinoController.findDestinationById,
);

routes.get(
  '/api/destino/pesquisa/:keyword',
  verifyApiKey,
  destinoController.findDestinationByKeyWord,
);

routes.put(
  '/api/destino/:id',
  verifyApiKey,
  destinoController.updateDataDestination,
);
routes.delete(
  '/api/destino/:id',
  verifyApiKey,
  destinoController.deleteDestinationById,
);

module.exports = routes;
