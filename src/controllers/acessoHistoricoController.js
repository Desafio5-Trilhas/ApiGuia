const historicoAcessoService = require('../services/acessoHistoricoService');

module.exports = class acessoHistoricoController {
  static createNewAcessRecords = async (req, res) => {
    const Usuario = require('../models/usuario');

    try {
      let email = req.user.email
      let user = await Usuario.findOne({ where: { email } })
      // Adiciona o id_usuario ao req.body
      req.body.id_usuario = user.id_usuario;

      const newDestino = await historicoAcessoService.createNewAcessRecords(
        req.body,
      );
      return res.status(201).json({
        status: 201,
        message: 'Histórico de acesso criado com sucesso.',
      });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findAcessRecordsById = async (req, res) => {
    const Usuario = require('../models/usuario');
    
    try {
      let email = req.user.email
      let user = await Usuario.findOne({ where: { email } })

      const acessoHistoricoUsuario =
        await historicoAcessoService.findAcessRecordsByPk(
          user.id_usuario,
        );
      return res.status(200).json(acessoHistoricoUsuario);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
