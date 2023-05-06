import { Router } from 'express';
import {
  getEmployeesController,
  getEmployeeByNameController,
  createEmployeeController,
} from '../controller/employee.js';

const routes = Router();

routes
  .get('', getEmployeesController)
  .get('/:name', getEmployeeByNameController)
  .post('', createEmployeeController);

export default routes;
