const { Sequelize } = require('sequelize');
const config = require('./config.js');
const pg = require('pg');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  logging: dbConfig.logging,
  dialectModule: pg,
});

module.exports = sequelize;
