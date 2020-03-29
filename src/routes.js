import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';
import authAdmin from './app/middlewares/authAdmin';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
routes.get('/recipients', RecipientController.index);

routes.use(authMiddleware);

routes.put('/users', UserController.update);
routes.post('/files', upload.single('file'), FileController.store);

routes.use(authAdmin);

routes.delete('/users', UserController.delete);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
routes.delete('/recipients', RecipientController.delete);

export default routes;
