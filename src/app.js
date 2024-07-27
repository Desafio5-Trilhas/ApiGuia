const express = require('express');
const sequelize = require('./db/connection.js');
const AcessoHistorico = require('./models/acessoHistorico.js');
const app = express();

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    console.log('API conectada ao banco de dados.');
    await sequelize.sync();
    const destino = await AcessoHistorico.findAll();
    console.log(JSON.stringify(destino, null, 2));
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
})();

module.exports = app;
