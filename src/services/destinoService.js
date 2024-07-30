const { Sequelize } = require('sequelize');
const Destino = require('../models/destino');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class destinoService {
  static createDestination = async (newDestino) => {
    try {
      const destino = await Destino.createNewDestination(newDestino);
      return destino;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findAllDestinations = async () => {
    try {
      const destinos = await Destino.getAllDestinations();
      return destinos;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findDestinationByPk = async (id) => {
    try {
      const destino = await Destino.findDestinationById(id);
      if (!destino) {
        throw new NotFound('Destino não encontrado.');
      }
      return destino;
    } catch (err) {
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new InternalServerError();
    }
  };

  static deleteDestination = async (id) => {
    try {
      await Destino.deleteDestination(id);
      return true;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static updateDestinationData = async (id, dados) => {
    try {
      const destinoAtualizado = await Destino.updateDestination(id, dados);
      if (!destinoAtualizado[0] === 1) {
        throw new UnprocessableEntity();
      }
      return true;
    } catch (err) {
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new UnprocessableEntity();
    }
  };
};
