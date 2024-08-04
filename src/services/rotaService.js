const Rota = require('../models/rota');
const {
  NotFound,
  UnprocessableEntity,
  InternalServerError,
} = require('./exceptions/httpRequestError');

module.exports = class rotaService {
  static createNewRoutes = async (newDestino) => {
    try {
      const destino = await Rota.createRoute(newDestino);
      return destino;
    } catch (err) {
      throw new UnprocessableEntity();
    }
  };

  static findAllRoutes = async () => {
    try {
      const destinos = await Rota.getAllRoute();
      return destinos;
    } catch (err) {
      throw new InternalServerError();
    }
  };

  static findRouteByPk = async (id) => {
    try {
      const destino = await Rota.findOneRoute(id);
      if (!destino) {
        throw new NotFound('Rota não encontrada.');
      }
      return destino;
    } catch (err) {
      if (err.name === 'NotFound') {
        throw err;
      }
      throw new InternalServerError();
    }
  };
};
