const { Sequelize } = require('sequelize');
const Destino = require('../models/destino');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class destinoService {
  static createDestiny = async (newDestino) => {
    try {
      const destino = await Destino.createNewDestiny(newDestino);
      return destino;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findAllDestinies = async () => {
    try {
      const destinos = await Destino.getAllDestinies();
      return destinos;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findDestinyByPk = async (id) => {
    try {
      const destino = await Destino.findById(id);
      if (!destino) {
        throw new NotFound('Destino não encontrado.');
      }
      return destino;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static deleteDestiny = async (id) => {
    try {
      await Destino.deleteDestiny(id);
      return true;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static updateDestinyData = async (id, dados) => {
    try {
      const destinoAtualizato = Destino.updateDestiny(id, dados);
      return true;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };
};
