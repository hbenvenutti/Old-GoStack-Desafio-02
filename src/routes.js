import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.put('/users');
routes.delete('/users');

routes.post('/sessions', SessionController.store);

export default routes;
