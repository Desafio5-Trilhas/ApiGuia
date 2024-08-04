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

  static createMultipleCompletedQuests = async (questoes, id_usuario) => {
    try {
      const promises = questoes.map(async (questao) => {
        return this.createNewCompletedQuest({
          data_finalizacao: new Date().toISOString(),
          ultima_dica: questao.ultima_dica,
          id_missao: questao.id_missao,
          id_usuario: id_usuario,
          id_destino: questao.id_destino,
        });
      });

      await Promise.all(promises);
      return true;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };
};
