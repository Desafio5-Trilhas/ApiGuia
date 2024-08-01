const AcessoHistorico = require('../models/acessoHistorico');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class acessoHistoricoService {
  static createNewAcessRecords = async (newAcessoHistorico) => {
    try {
      const acessoHistorico = await AcessoHistorico.createAccessRecords(
        newAcessoHistorico,
      );
      return acessoHistorico;
    } catch (err) {
      console.log(err);
      throw new UnprocessableEntity('Erro ao registrar acesso.');
    }
  };

  static findAcessRecordsByPk = async (id_usuario) => {
    try {
      const acessoHistoricoUser = await AcessoHistorico.getAccessRecordsByUser(
        id_usuario,
      );
      if (!acessoHistoricoUser) {
        throw new NotFound('Histórico de acesso não encontrado.');
      }
      return acessoHistoricoUser;
    } catch (err) {
      console.log(err);
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new InternalServerError();
    }
  };
};
