const express = require('express');
const usuario = require('./usuarioRoute.js');
const destino = require('./destinoRoute.js');
const missao = require('./missaoRoute.js');

const routes = (app) => {
  app
    .route('/api')
    .get((req, res) =>
      res.status(200).send('Você está na API do Guia Turístico MA.'),
    );

  app.use(express.json(), usuario);
  app.use(express.json(), destino);
  app.use(express.json(), missao);
};

module.exports = routes;
