const missaoConcluidaService = require('../services/missaoConcluidaService');

module.exports = class missaoConcluidaController {
  static createCompletedQuest = async (req, res) => {
    try {
      const newMissao = await missaoConcluidaService.createNewCompletedQuest(
        req.body,
      );
      return res.status(201).json({
        status: 201,
        message: 'Missão concluída registrada.',
      });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findCompletedQuestById = async (req, res) => {
    const Usuario = require('../models/usuario');
      
    try {
      let email = req.user.email
      let user = await Usuario.findOne({ where: { email } })

      const missaoConcluidaUsuario =
        await missaoConcluidaService.findCompletedQuestByPk(
          user.id_usuario,
        );
      return res.status(200).json(missaoConcluidaUsuario);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
