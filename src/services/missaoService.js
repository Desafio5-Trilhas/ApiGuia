const Missao = require('../models/missao');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class missaoService {
  static createNewQuestion = async (newMissao) => {
    try {
      const missao = await Missao.createQuestion(newMissao);
      return missao;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findAllQuestions = async () => {
    try {
      const missoes = await Missao.getAllQuestions();
      return missoes;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findQuestionByDestinationPk = async (id_destino) => {
    try {
      const missoes = await Missao.getAllQuestionsByDestination(id_destino);
      if (!destino) {
        throw new NotFound('Missões não encontradas ou Destino inexistente.');
      }
      return missoes;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findQuestionByPk = async (id) => {
    try {
      const missoes = await Missao.findQuestionById(id);
      if (!destino) {
        throw new NotFound('Missão não encontrado.');
      }
      return missoes;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static deleteQuestion = async (id) => {
    try {
      await Missao.deleteQuestion(id);
      return true;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static updateQuestionData = async (id, dados) => {
    try {
      const missaoAtualizato = Missao.updateQuestion(id, dados);
      return true;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };
};
