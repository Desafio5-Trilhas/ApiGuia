const destinoService = require('../services/destinoService.js');

module.exports = class destinoController {
  static createNewDestination = async (req, res) => {
    try {
      const newDestino = await destinoService.createDestination(req.body);
      return res
        .status(201)
        .json({ status: 201, message: 'Destino criado com sucesso.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findDestinations = async (req, res) => {
    try {
      const destinos = await destinoService.findAllDestinations();
      return res.status(200).json(destinos);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findDestinationById = async (req, res) => {
    try {
      const destino = await destinoService.findDestinationByPk(req.params.id);
      return res.status(200).json(destino);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static deleteDestinationById = async (req, res) => {
    try {
      await destinoService.deleteDestination(req.params.id);
      return res.status(200).json({ message: 'Destino deletado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static updateDataDestination = async (req, res) => {
    try {
      const destinoAtualizado = await destinoService.updateDestinationData(
        req.params.id,
        req.body,
      );
      return res.status(200).json({ message: 'Destino atualizado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };
};
