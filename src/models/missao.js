const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Destino = require('./destino.js');

class Missao extends Model {}

Missao.init(
  {
    id_missao: {
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
    descricao: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dica1: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    dica2: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Missao',
    tableName: 'Missao',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = Missao;
