import express from 'express';
import BotsController from '../controller/botsController.js';

const routes = express.Router();

routes.get('/bots', BotsController.showAll);
routes.get('/bots/:id', BotsController.show);
routes.post('/bots/', BotsController.create);
routes.put('/bots/:id', BotsController.replace);
routes.patch('/bots/:id', BotsController.update);
routes.delete('/bots/:id', BotsController.destroy);

routes.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default routes;
