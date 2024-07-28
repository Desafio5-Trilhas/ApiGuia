const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');

class Destino extends Model {
  static async createNewDestiny(newDestino) {
    return await Destino.create(newDestino);
  }

  static async getAllDestinies() {
    return await Destino.findAll();
  }

  static async findById(id) {
    return await Destino.findByPk(id, {
      include: ['imagens', 'rotas'],
    });
  }

  static async updateDestiny(id, data) {
    return await Destino.update(data, {
      where: { id: id },
    });
  }

  static async deleteDestiny(id) {
    return await Destino.destroy({
      where: { id: id },
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
