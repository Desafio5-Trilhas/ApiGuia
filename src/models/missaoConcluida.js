const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');
const Destino = require('./destino.js');
const Usuario = require('./usuario.js');
const Missao = require('./missao.js');

class MissaoConcluida extends Model {
  static associations(models) {
    MissaoConcluida.belongsTo(models.Destino, { foreignKey: 'id_destino' });
    MissaoConcluida.belongsTo(models.Usuario, { foreignKey: 'id_usuario' });
    MissaoConcluida.belongsTo(models.Missao, { foreignKey: 'id_missao' });
  }
}

MissaoConcluida.init(
  {
    id_missao_concluida: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    data_finalizacao: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    ultima_dica: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
    id_missao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Missao,
        key: 'id_missao',
      },
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Usuario,
        key: 'id_usuario',
      },
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
    id_destino: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Destino,
        key: 'id_destino',
      },
      onDelete: 'NO ACTION',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'MissaoConcluida',
    tableName: 'MissaoConcluida',
    schema: 'public',
    timestamps: false,
  },
);

module.exports = MissaoConcluida;
