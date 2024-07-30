const historicoAcessoService = require('../services/acessoHistoricoService');

module.exports = class acessoHistoricoController {
  static createNewAcessRecords = async (req, res) => {
    try {
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
    try {
      const acessoHistoricoUsuario =
        await historicoAcessoService.findAcessRecordsByPk(
          req.params.id_usuario,
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
