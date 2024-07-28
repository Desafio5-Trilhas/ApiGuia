const express = require('express');
const destinoController = require('../controllers/destinoController');
const { verifyApiKey } = require('../middlewares/authMiddleware');

const routes = express.Router();

routes.post('/api/destiny', verifyApiKey, destinoController.createNewDestiny);
routes.get('/api/destiny', verifyApiKey, destinoController.findDestinies);
routes.get('/api/destiny/:id', verifyApiKey, destinoController.findDestinyById);
routes.put(
  '/api/destiny/:id',
  verifyApiKey,
  destinoController.updateDataDestiny,
);
routes.delete(
  '/api/destiny/:id',
  verifyApiKey,
  destinoController.deleteDestinyById,
);

module.exports = routes;
