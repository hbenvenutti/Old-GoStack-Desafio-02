import { Router } from 'express';

import UserController from './app/controllers/userController';

const routes = new Router();

routes.get('/users', UserController.index);

export default routes;
