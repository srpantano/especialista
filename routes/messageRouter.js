import express from 'express';
import MessagesController from '../controller/messagesController.js';

const routes = express.Router();

routes.get('/messages', MessagesController.showAll);
routes.get('/messages/:id', MessagesController.show);
routes.post('/messages/', MessagesController.create);

routes.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default routes;
