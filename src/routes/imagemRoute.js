const express = require('express');
const { verifyApiKey } = require('../middlewares/authMiddleware');
const imagemController = require('../controllers/imagemController');
const multer = require('multer');

const routes = express.Router();

// const storage = multer.memoryStorage();
// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 1 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = /jpeg|jpg|png/;
//     const extname = allowedTypes.test(file.mimetype);
//     const mimetype = allowedTypes.test(
//       file.originalname.split('.').pop().toLowerCase(),
//     );
//     if (extname && mimetype) {
//       return cb(null, true);
//     } else {
//       cb(new Error('Tipo de arquivo não permitido'));
//     }
//   },
// });

routes.post('/api/imagem', verifyApiKey, imagemController.saveImageToDB);
routes.get(
  '/api/imagem/:id_imagem',
  verifyApiKey,
  imagemController.returnImage,
);

module.exports = routes;
