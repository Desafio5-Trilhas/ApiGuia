const express = require('express');
const sequelize = require('./db/connection.js');
const app = express();

app.use(express.json());

(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('API conectada ao banco de dados.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
  } finally {
    await sequelize.close();
  }
})();

module.exports = app;
