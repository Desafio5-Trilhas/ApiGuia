const { Sequelize } = require('sequelize');
const config = require('./config.js');
const pg = require('pg');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = new Sequelize(dbConfig.url, {
  dialect: dbConfig.dialect,
  logging: dbConfig.logging,
  dialectModule: pg,
  port: 5432,
  pool: {
    max: 10,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
  define: {
    timestamps: false,
  },
  dialectOptions: {
    connectTimeout: 60000,
  },
});

module.exports = sequelize;
