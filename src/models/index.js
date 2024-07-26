const { Sequelize } = require('sequelize');
const config = require('../db/config.js');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.url, {
  host: dbConfig.dialect,
  dialect: dbConfig.logging,
});

module.exports = sequelize;
