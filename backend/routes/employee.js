import { Router } from 'express';
import {
  getEmployeesController,
  getEmployeeByNameController,
  createEmployeeController,
  getEmployeesSelectController,
} from '../controller/employee.js';
import { validateBody, validateNameUrl } from '../middleware/employee.js';

const routes = Router();

routes
  .get('', getEmployeesController)
  .get('/select', getEmployeesSelectController)
  .get('/:name', validateNameUrl, getEmployeeByNameController)
  .post('', validateBody, createEmployeeController);

export default routes;
