const { Model, DataTypes, Op } = require('sequelize');
const sequelize = require('../db/connection.js');

class Destino extends Model {
  static async createNewDestination(newDestino) {
    return await Destino.create(newDestino);
  }

  static async getAllDestinations() {
    return await Destino.findAll();
  }

  static async findDestinationById(id) {
    return await Destino.findByPk(id, {
      include: ['imagens', 'rotas', 'missoes'],
    });
  }

  static async findDestinationByWord(palavraChave) {
    return await Destino.findAll({
      where: {
        titulo: {
          [Op.iLike]: `%${palavraChave}%`,
        },
      },
      include: ['imagens', 'rotas', 'missoes'],
    });
  }

  static async updateDestination(id, data) {
    return await Destino.update(data, {
      where: { id_destino: id },
    });
  }

  static async deleteDestination(id) {
    return await Destino.destroy({
      where: { id_destino: id },
    });
  }
}

Destino.init(
  {
    id_destino: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Destino',
    tableName: 'Destino',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = Destino;
