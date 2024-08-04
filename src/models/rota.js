const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Destino = require('./destino.js');

class Rota extends Model {
  static async createRoute(newRota) {
    return await Rota.create(newRota);
  }

  static async getAllRoute() {
    return await Rota.findAll();
  }

  static async findOneRoute(id) {
    return await Rota.findByPk(id);
  }
}

Rota.init(
  {
    id_rota: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Destino,
        key: 'id_destino',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(9, 6),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Rota',
    tableName: 'Rota',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = Rota;
