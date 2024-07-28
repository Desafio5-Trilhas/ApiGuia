import swaggerJsdoc from 'swagger-jsdoc';
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GUIA-TURISTICO-MARANHÃO',
      version: '1.0.0',
      description:
        'API que alimenta website de guia de turismo do Maranhão - Desafio 5 Programa Trilhas 2024',
    },
  },
  servers: [
    {
      url: 'https://api-guia-turistico.vercel.app/',
      description:
        'API que alimenta website de guia de turismo do Maranhão - Desafio 5 Programa Trilhas 2024.',
    },
    {
      url: 'http://localhost:3000/',
      description:
        'API que alimenta website de guia de turismo do Maranhão - Desafio 5 Programa Trilhas 2024.',
    },
  ],
  apis: ['./src/routes/*.js'],
};

const swaggerSpecs = swaggerJsdoc(options);
export default swaggerSpecs;
