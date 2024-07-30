const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Usuario = require('./usuario.js');
const Destino = require('./destino.js');

class AcessoHistorico extends Model {
  static async createAccessRecords(newAcessoHistorico) {
    return await AcessoHistorico.create(newAcessoHistorico);
  }

  static async getAccessRecordsByUser(id_usuario) {
    return await AcessoHistorico.findAll({
      where: {
        id_usuario: id_usuario,
      },
      include: ['destinos'],
    });
  }
}

AcessoHistorico.init(
  {
    id_acesso_historico: {
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
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'id_usuario',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    data_acesso: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AcessoHistorico',
    tableName: 'AcessoHistorico',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: 'unique_access',
        unique: true,
        fields: ['id_destino', 'id_usuario', 'data_acesso'],
      },
    ],
  },
);

module.exports = AcessoHistorico;
