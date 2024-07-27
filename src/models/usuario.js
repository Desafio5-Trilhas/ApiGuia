'use restrict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const bcrypt = require('bcrypt');

class Usuario extends Model {
  static associations(models) {
    Usuario.hasMany(models.AcessoHistorico, { foreignKey: 'id_usuario' });
    Usuario.hasMany(models.MissaoConcluida, { foreignKey: 'id_usuario' });
  }

  static async createNewUser(newUser) {
    const saltRounds = 10;
    newUser.senha = await bcrypt.hash(newUser.senha, saltRounds);
    return await Usuario.create(newUser);
  }

  static async findAllUsers() {
    return await Usuario.findAll();
  }

  static async findByEmail(email) {
    return await prisma.user.findUnique({
      where: { email: email },
    });
  }

  static async deleteUser(email) {
    return await prisma.user.delete({
      where: { email },
    });
  }

  static async updateUser(email, data) {
    return await prisma.user.update({
      where: { email },
      data: {
        ...data,
      },
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
