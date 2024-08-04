const express = require('express');
const { verifyApiKey } = require('../middlewares/authMiddleware');
const rotaController = require('../controllers/rotaController');

const routes = express.Router();

routes.post('/api/rota', verifyApiKey, rotaController.createNewRoute);
routes.get('/api/rota', verifyApiKey, rotaController.findRoutes);
routes.get(
  '/api/rota/:id_rota',
  verifyApiKey,
  rotaController.findDestinationById,
);

module.exports = routes;
