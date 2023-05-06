import {
  createEmployeeRepository,
  getEmployeeByNameRepository,
  getEmployeesRepository,
} from '../repository/employee.js';

export const getEmployeesService = () => {
  getEmployeesRepository();
};

export const getEmployeeByNameService = () => {
  getEmployeeByNameRepository();
};

export const createEmployeeService = () => {
  createEmployeeRepository();
};
