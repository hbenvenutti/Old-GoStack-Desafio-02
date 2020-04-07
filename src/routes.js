import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import DeliverymanController from './app/models/Deliveryman';
import FileController from './app/controllers/FileController';
import RecipientController from './app/controllers/RecipientController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';

import authMiddleware from './app/middlewares/auth';
import authAdmin from './app/middlewares/authAdmin';

const routes = new Router();
const upload = multer(multerConfig);

// OPEN ROUTES
routes.get('/recipients', RecipientController.index);
routes.post('/sessions', SessionController.store);
routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

// AUTHENTICATION REQUIRED ROUTES

routes.use(authMiddleware);

routes.post('/files', upload.single('file'), FileController.store);
routes.put('/users', UserController.update);

// ADMIN ROUTES

routes.use(authAdmin);

routes.get('/deliverymen', DeliverymanController.index);
routes.get('/deliverymen/:id', DeliverymanController.show);
routes.post('deliverymen', DeliverymanController.store);
routes.put('deliverymen/:id', DeliverymanController.update);
routes.delete('deliverymen/:id', DeliverymanController.delete);

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
routes.delete('/recipients', RecipientController.delete);

routes.delete('/users', UserController.delete);

export default routes;
