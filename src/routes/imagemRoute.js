const express = require('express');
const { verifyApiKey } = require('../middlewares/authMiddleware');
const imagemController = require('../controllers/imagemController');
const multer = require('multer');

const routes = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

routes.post(
  '/api/imagem',
  verifyApiKey,
  upload.single('imagem'),
  imagemController.saveImageToDB,
);
routes.get('/api/imagem', verifyApiKey, imagemController.saveImageToDB);

module.exports = routes;
