const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Destino = require('./destino.js');

class Imagem extends Model {
  static async saveImage(file, id) {
    return await Imagem.create({ imagem: file, id_destino: id });
  }
}

Imagem.init(
  {
    id_imagem: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    imagem: {
      type: DataTypes.BLOB,
      allowNull: false,
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
  },
  {
    sequelize,
    modelName: 'Imagem',
    tableName: 'Imagem',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = Imagem;
