const AcessoHistorico = require('./acessoHistorico.js');
const Destino = require('./destino.js');
const Imagem = require('./imagem.js');
const Missao = require('./missao.js');
const MissaoConcluida = require('./missaoConcluida.js');
const Rota = require('./rota.js');
const Usuario = require('./usuario.js');

const defineAssociations = () => {
  // Associação com Imagem-Destino
  Destino.hasMany(Imagem, { foreignKey: 'id_destino', as: 'imagens' });
  Imagem.belongsTo(Destino, { foreignKey: 'id_destino' });

  // Associação com Rota-Destino
  Destino.hasMany(Rota, { foreignKey: 'id_destino', as: 'rotas' });
  Rota.belongsTo(Destino, { foreignKey: 'id_destino' });

  // Associação com Missao-Destino
  Destino.hasMany(Missao, { foreignKey: 'id_destino', as: 'missoes' });
  Missao.belongsTo(Destino, { foreignKey: 'id_destino' });

  // Associação com MissaoConcluida-Destino
  Destino.hasMany(MissaoConcluida, { foreignKey: 'id_destino' });
  MissaoConcluida.belongsTo(Destino, { foreignKey: 'id_destino' });

  // Associação com AcessoHistorico-Destino
  Destino.hasMany(AcessoHistorico, { foreignKey: 'id_destino' });
  AcessoHistorico.belongsTo(Destino, {
    foreignKey: 'id_destino',
    as: 'destinos',
  });

  //Associação com Usuario-AcessoHistorico
  Usuario.hasMany(AcessoHistorico, { foreignKey: 'id_usuario' });
  AcessoHistorico.belongsTo(Usuario, { foreignKey: 'id_usuario' });

  //Associação com Usuario-MissaoConcluida
  Usuario.hasMany(MissaoConcluida, { foreignKey: 'id_usuario' });
  MissaoConcluida.belongsTo(Usuario, { foreignKey: 'id_usuario' });

  //Associação com MissaoConcluida-Missao
  Missao.hasMany(MissaoConcluida, { foreignKey: 'id_missao' });
  MissaoConcluida.belongsTo(Missao, { foreignKey: 'id_missao' });
};

module.exports = defineAssociations;
