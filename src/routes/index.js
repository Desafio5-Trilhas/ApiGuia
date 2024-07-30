const express = require('express');
const usuario = require('./usuarioRoute.js');
const destino = require('./destinoRoute.js');
const missao = require('./missaoRoute.js');
const acessoHistorico = require('./acessoHistoricoRoute.js');
const missaoConcluida = require('./missaoConcluidaRoute.js');

const routes = (app) => {
  app
    .route('/api')
    .get((req, res) =>
      res.status(200).send('Você está na API do Guia Turístico MA.'),
    );

  app.use(express.json());
  app.use(usuario);
  app.use(destino);
  app.use(missao);
  app.use(acessoHistorico);
  app.use(missaoConcluida);
};

module.exports = routes;
