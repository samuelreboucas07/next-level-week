import express from 'express';
import ItemsController from './controllers/ItemsController';
import PointsController from './controllers/PointsController';
const routes = express.Router();

routes.get('/items', ItemsController.getItems)
routes.post('/points', PointsController.createPoint);
routes.get('/points/:id', PointsController.show);

export default routes;