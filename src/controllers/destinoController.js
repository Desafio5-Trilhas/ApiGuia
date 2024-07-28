const destinoService = require('../services/destinoService');

module.exports = class destinoController {
  static createNewDestiny = async (req, res) => {
    try {
      const newDestino = await destinoService.createDestiny(req.body);
      return res.status(201).json({ status: 201, message: 'Destino criado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findDestinies = async (req, res) => {
    try {
      const destinos = await destinoService.findAllDestinies();
      return res.status(200).json(destinos);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static findDestinyById = async (req, res) => {
    try {
      const destino = await destinoService.findDestinyByPk(req.params.id);
      return res.status(200).json(destino);
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static deleteDestinyById = async (req, res) => {
    try {
      await destinoService.deleteDestiny(req.body.id);
      return res.status(200).json({ message: 'Destino deletado.' });
    } catch (err) {
      return res.status(err.status || 500).json({
        status: err.status || 500,
        message: err.message || 'Internal Error',
      });
    }
  };

  static updateDataDestiny = async (req, res) => {
    try {
      const userAtualizado = await destinoService.updateDestinyData(
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
