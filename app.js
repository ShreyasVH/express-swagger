const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'My API', // Specify your API title
      version: '1.0.0', // Specify your API version
    },
  },
  apis: ['./routes/*.js'], // Specify the path to your route files
};

const swaggerSpec = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/', routes);

app.use('/swagger.json', (req, res) => {
  res.json(swaggerSpec);
})

app.listen(process.env.PORT, () => console.log('app listening on port ' + process.env.PORT + '!'))

module.exports = {
  app
}