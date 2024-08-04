const rotaService = require('../services/rotaService');

module.exports = class rotaController {
  static createNewRoute = async (req, res) => {
    try {
      const newRota = await rotaService.createNewRoutes(req.body);
      return res
        .status(201)
        .json({ status: 201, message: 'Rota criada com sucesso.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findRoutes = async (req, res) => {
    try {
      const rotas = await rotaService.findAllRoutes();
      return res.status(200).json(rotas);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findDestinationById = async (req, res) => {
    try {
      const rota = await rotaService.findRouteByPk(req.params.id_rota);
      return res.status(200).json(rota);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
