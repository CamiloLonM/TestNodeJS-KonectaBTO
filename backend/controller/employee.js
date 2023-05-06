import {
  createEmployeeService,
  getEmployeeByNameService,
  getEmployeesService,
  getEmployeesSelectService,
} from '../service/employee.js';

export const getEmployeesController = async (req, res, next) => {
  try {
    const employees = await getEmployeesService();

    return res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

export const getEmployeesSelectController = async (req, res, next) => {
  try {
    const employees = await getEmployeesSelectService();

    return res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

export const getEmployeeByNameController = async (req, res, next) => {
  try {
    const { name } = req.params;

    const employee = await getEmployeeByNameService(name);

    if (!employee) {
      return res.sendStatus(204);
    }

    return res.status(200).json(employee);
  } catch (error) {
    next(error);
  }
};

export const createEmployeeController = async (req, res, next) => {
  try {
    const { body } = req;

    const employee = await createEmployeeService(body);

    return res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};
