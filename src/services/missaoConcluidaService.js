const MissaoConcluida = require('../models/missaoConcluida');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class missaoConcluidaService {
  static createNewCompletedQuest = async (newMissaoConcluida) => {
    try {
      const missaoConcluida = await MissaoConcluida.createCompletedQuest(
        newMissaoConcluida,
      );
      return missaoConcluida;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findCompletedQuestByPk = async (id_usuario) => {
    try {
      const missaoConcluidaUser = await MissaoConcluida.getCompletedQuestByUser(
        id_usuario,
      );
      if (!missaoConcluidaUser) {
        throw new NotFound('Não há missões concluídas.');
      }
      return missaoConcluidaUser;
    } catch (err) {
      console.log(err);
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new InternalServerError();
    }
  };
};
