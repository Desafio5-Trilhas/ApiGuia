const express = require('express');
const users = require('./usuarioRoute.js');

const routes = (app) => {
  app
    .route('/api')
    .get((req, res) =>
      res.status(200).send('Você está na API do Guia Turístico MA.'),
    );

  app.use(express.json(), users);
};

module.exports = routes;
