const express = require('express');
const destinoController = require('../controllers/destinoController');
const { verifyApiKey } = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post('/api/destino', verifyApiKey, destinoController.createNewDestiny);
routes.get('/api/destino', verifyApiKey, destinoController.findDestinies);
routes.get('/api/destino/:id', verifyApiKey, destinoController.findDestinyById);
routes.put(
  '/api/destino/:id',
  verifyApiKey,
  destinoController.updateDataDestiny,
);
routes.delete(
  '/api/destino/:id',
  verifyApiKey,
  destinoController.deleteDestinyById,
);

module.exports = routes;
