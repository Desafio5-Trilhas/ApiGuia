const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection.js');

class Destino extends Model {
  static associations(models) {
    Destino.hasMany(models.AcessoHistorico, { foreignKey: 'id_destino' });
    Destino.hasMany(models.Imagem, { foreignKey: 'id_destino' });
    Destino.hasMany(models.Rota, { foreignKey: 'id_destino' });
    Destino.hasMany(models.Missao, { foreignKey: 'id_destino' });
    Destino.hasMany(models.MissaoConcluida, { foreignKey: 'id_destino' });
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
