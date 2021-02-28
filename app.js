import express from 'express';
import swaggerUi from 'swagger-ui-express';

import botRoutes from './routes/botRouter.js';
import messageRoutes from './routes/messageRouter.js';
import { swaggerDocument } from './docs/doc.js';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(botRoutes);
    this.server.use(messageRoutes);
    this.server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
}

export default new App().server;
