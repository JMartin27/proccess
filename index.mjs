import Express from 'express';
import bodyParser from 'body-parser';
import Boom from '@hapi/boom';
import { startConnection } from './src/mongo/index.mjs';
import FiltersRouter from './src/handlers/filters/index.mjs';
import { PORT } from './src/commons/env.mjs';
import buildContainer from './src/container/buildContainer.mjs';
import ProcessModel from './src/models/Process.mjs';

const app = Express();

app.use(bodyParser.json());
app.use(buildContainer);
app.use(Express.static('public'));
app.get('/', (req, res) => {
  res.send(`${__dirname}/public/index.html`);
});

app.use('/images', FiltersRouter);

// Documento de Mongo
app.get('/images/:id', async (req, res, next) => {
  try {
    const { id } = req.params; // URL
    const document = await ProcessModel.findById(id);
    if (!document) {
      const err = Boom.notFound(`Documento no encontrado con el ID especificado ${id}`);
      throw err;
    }
    // Documento
    res.json(document);
  } catch (error) {
    next(error);
  }
});

app.use((error, req, res, next) => {
  if (error) {
    const err = Boom.isBoom(error) ? error : Boom.internal(error);
    const { statusCode } = err.output;
    const { payload } = err.output;
    const response = { ...payload, stack: err.stack };
    return res.status(statusCode).json(response);
  }

  return next();
});
const startServer = async () => {
  await startConnection();
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
};

startServer();