import { Router } from 'express';
import {
  getRequestsController,
  createRequestController,
  deleteRequestByIdController,
} from '../controller/request.js';

const routes = Router();

routes
  .get('', getRequestsController)
  .post('', createRequestController)
  .delete('/:id', deleteRequestByIdController);

export default routes;
