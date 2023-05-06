import {
  createEmployeeService,
  getEmployeeByNameService,
  getEmployeesService,
} from '../service/employee.js';

export const getEmployeesController = async (req, res, next) => {
  try {
    const employees = getEmployeesService();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByNameController = (req, res, next) => {
  try {
    const employee = getEmployeeByNameService();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const createEmployeeController = (req, res, next) => {
  try {
    const employee = createEmployeeService();

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
