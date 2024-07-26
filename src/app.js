const express = require('express');
const sequelize = require('./models/index.js');

const app = express();

app.use(express.json());

sequelize
  .sync()
  .then(() => {
    console.log('API conectada ao banco de dados.');
  })
  .catch((err) => {
    console.error('Não foi possível conectar ao banco de dados:', err);
  });

module.exports = app;
