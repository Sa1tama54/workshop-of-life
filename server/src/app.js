import * as dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

import indexRoute from './routes/index';

import checkAuth from './middlewares/checkAuth';
import uploadFile from './middlewares/uploadFile';

dotenv.config();

const app = express();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'A simple Express Library API',
    },
    servers: [
      {
        url: `${process.env.API_HOST}/${process.env.PORT}`,
      },
    ],
  },
  apis: [`${__dirname}/routes/*.js`],
};

const specs = swaggerJSDoc(options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use('/uploads', express.static(`${__dirname}/uploads`));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/', indexRoute);

app.post('/upload', checkAuth, uploadFile.single('image'), (req, res) => {
  res.json({
    url: `/uploads/${req.file.originalname}`,
  });
});

export default app;
