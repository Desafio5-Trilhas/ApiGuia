'use restrict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static async createNewUser(newUser) {
    const saltRounds = 10;
    newUser.senha = await bcrypt.hash(newUser.senha, saltRounds);
    newUser.status_conta = 'ATIVO';
    return await Usuario.create(newUser);
  }

  static async findAllUsers() {
    return await Usuario.findAll({
      attributes: ['id_usuario', 'nome', 'email', 'status_conta', 'documento'],
    });
  }

  static async findByEmail(email) {
    return await Usuario.findOne({
      attributes: [
        'id_usuario',
        'nome',
        'email',
        'senha',
        'status_conta',
        'documento',
      ],
      where: { email: email },
    });
  }

  static async deleteUser(email) {
    return await Usuario.destroy({
      where: { email: email },
    });
  }

  static async updateUser(email, data) {
    return await Usuario.update(data, {
      where: { email: email },
    });
  }
}

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
      unique: true,
    },
    senha: {
      type: DataTypes.STRING(100),
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
