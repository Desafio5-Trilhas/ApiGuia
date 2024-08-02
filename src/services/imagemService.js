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
};
