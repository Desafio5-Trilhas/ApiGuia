const imagemService = require('../services/imagemService');

module.exports = class imagemController {
  static saveImageToDB = async (req, res) => {
    try {
      const id_destino = req.body.id_destino;
      const imagem = req.file;
      if (!imagem) {
        return res.status(400).json({
          status: 400,
          message: 'Nenhuma imagem enviada',
        });
      }
      const savedImage = await imagemService.saveImageDB(imagem, id_destino);
      return res
        .status(201)
        .json({ status: 201, message: 'Imagem salva com sucesso.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static returnImage = async (req, res) => {
    try {
      const imagem = await imagemService.getImage(req.params.id_imagem);
      res.setHeader('Content-Type', 'image/jpg');
      return res.status(200).send(imagem.imagem);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
