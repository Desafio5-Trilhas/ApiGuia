const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Destino = require('./destino.js');

class Missao extends Model {
  static async createQuestion(newQuestion) {
    return await Missao.create(newQuestion);
  }

  static async getAllQuestions() {
    return await Missao.findAll();
  }

  static async getAllQuestionsByDestination(id_destination) {
    return await Missao.findAll({
      where: { id_destino: id_destination },
    });
  }

  static async findQuestionById(id) {
    return await Missao.findByPk(id);
  }

  static async updateQuestion(id, data) {
    return await Missao.update(data, {
      where: { id_missao: id },
    });
  }

  static async deleteQuestion(id) {
    return await Missao.destroy({
      where: { id_missao: id },
    });
  }
}

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
