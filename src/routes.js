import { Router } from 'express';

import UserController from './app/controllers/userController';

const routes = new Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

export default routes;
