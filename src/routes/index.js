const express = require('express');
const usuario = require('./usuarioRoute.js');
const destino = require('./destinoRoute.js');
const missao = require('./missaoRoute.js');
const acessoHistorico = require('./acessoHistoricoRoute.js');
const missaoConcluida = require('./missaoConcluidaRoute.js');
const imagem = require('./imagemRoute.js');
const rota = require('./rotaRoute.js');

const routes = (app) => {
  app
    .route('/')
    .get((req, res) =>
      res.status(200).send('Você está na API do Guia Turístico MA.'),
    );

  app.use(express.json());
  app.use(usuario);
  app.use(destino);
  app.use(missao);
  app.use(acessoHistorico);
  app.use(missaoConcluida);
  app.use(imagem);
  app.use(rota);
};

module.exports = routes;
