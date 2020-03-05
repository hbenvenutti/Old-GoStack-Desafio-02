import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import authAdmin from './app/middlewares/authAdmin';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/recipients');

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.use(authAdmin);

routes.delete('/users');

routes.post('/recipients');
routes.put('/recipients');
routes.delete('/recipients');

export default routes;
