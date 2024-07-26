require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DATABASE_URL_DEV,
    dialect: 'postgres',
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL_DEV,
    dialect: 'postgres',
    logging: false,
  },
};
