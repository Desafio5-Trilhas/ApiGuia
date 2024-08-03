const Imagem = require('../models/imagem');

module.exports = class imagemService {
  static saveImageDB = async (filePath, idDestino) => {
    try {
      const imagem = await Imagem.saveImage(filePath, idDestino);
      return imagem;
    } catch (err) {
      console.log(err);
      throw err;
      throw new UnprocessableEntity();
    }
  };

  static getImage = async (id) => {
    try {
      const imagem = await Imagem.findImageById(id);
      if (!imagem) {
        throw new NotFound('Imagem não encontrado.');
      }
      return imagem;
    } catch (err) {
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new InternalServerError();
    }
  };
};
