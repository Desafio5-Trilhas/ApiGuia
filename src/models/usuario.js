const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');

class Usuario extends Model {}

Usuario.init(
  {
    id_usuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    senha: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    status_conta: {
      type: DataTypes.STRING(7),
      allowNull: false,
      validate: {
        isIn: [['INATIVO', 'ATIVO']],
      },
    },
    documento: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuario',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = Usuario;
