const missaoConcluidaService = require('../services/missaoConcluidaService.js');
const missaoService = require('../services/missaoService.js');

module.exports = class missaoController {
  static createQuestion = async (req, res) => {
    try {
      const newMissao = await missaoService.createNewQuestion(req.body);
      return res
        .status(201)
        .json({ status: 201, message: 'Missão criada com sucesso.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findQuestions = async (req, res) => {
    try {
      const missoes = await missaoService.findAllQuestions();
      return res.status(200).json(missoes);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findQuestionByDestinationId = async (req, res) => {
    try {
      const missoesDestino = await missaoService.findQuestionByDestinationPk(
        req.params.id_destino,
      );
      return res.status(200).json(missoesDestino);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findQuestionById = async (req, res) => {
    try {
      const missao = await missaoService.findQuestionByPk(req.params.id_missao);
      return res.status(200).json(missao);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static deleteQuestionById = async (req, res) => {
    try {
      await missaoService.deleteQuestion(req.params.id_missao);
      return res.status(200).json({ message: 'Missão deletada.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static updateDataQuestion = async (req, res) => {
    try {
      const missaoAtualizada = await missaoService.updateQuestionData(
        req.params.id_missao,
        req.body,
      );
      return res.status(200).json({ message: 'Missão atualizada.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static validateQuestAnswer = async (req, res) => {
    const Usuario = require('../models/usuario');

    try {
      let result;
      const resultado = await missaoService.answerQuestions(req.body);
      if (resultado.length != 3 || resultado == null) {
        result = { message: 'Falha', id: resultado };
      } else {
        let email = req.user.email
        let user = await Usuario.findOne({ where: { email } })

        await missaoConcluidaService.createMultipleCompletedQuests(req.body, user.id_usuario);
        result = { message: 'Sucesso', id: resultado };
      }
      return res.status(201).json({ result });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
