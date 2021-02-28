import express from 'express';

import botRoutes from './routes/botRouter.js';
import messageRoutes from './routes/messageRouter.js';

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
  }
}

export default new App().server;
