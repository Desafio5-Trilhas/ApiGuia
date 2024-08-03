const express = require('express');
const sequelize = require('./db/connection.js');
const routes = require('./routes/index.js');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');
const cors = require('cors');
const defineAssociations = require('./models/associacoes.js');
const app = express();

const swaggerDocument = YAML.load(
  path.join(process.cwd(), 'src', 'swagger', 'swaggerDocument.yaml'),
);

// NÃO APAGAR! CDN CSS NECESSARIO PARA CARREGAR O SWAGGER EM PRODUÇÃO
const CSS_URL =
  'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.17.14/swagger-ui.min.css';

app.use(express.json());
app.use(
  '/api/docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, { customCssUrl: CSS_URL }),
);
app.use(cors());

(async () => {
  try {
    await sequelize.authenticate();
    defineAssociations();
    await sequelize.sync();
    console.log('API conectada ao banco de dados.');
  } catch (error) {
    console.error('Não foi possível conectar ao banco de dados:', error);
    process.exit(1);
  }
})();

routes(app);

module.exports = app;
