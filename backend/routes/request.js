import { Router } from 'express';
import {
  getRequestsController,
  createRequestController,
  deleteRequestByIdController,
} from '../controller/request.js';
import { validateBody, validateIdUrl } from '../middleware/request.js';

const routes = Router();

routes
  .get('', getRequestsController)
  .post('', validateBody, createRequestController)
  .delete('/:id', validateIdUrl, deleteRequestByIdController);

export default routes;
