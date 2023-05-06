import { formatDate } from '../helpers/date.js';
import {
  createEmployeeRepository,
  getEmployeeByNameRepository,
  getEmployeesRepository,
} from '../repository/employee.js';

export const getEmployeesService = async () => {
  const employees = await getEmployeesRepository();

  employees.forEach((employee) => {
    employee.fecha_ingreso = formatDate(employee.fecha_ingreso);
  });

  return employees;
};

export const getEmployeeByNameService = async (name) => {
  const employees = await getEmployeeByNameRepository(name);

  if (employees) {
    employees.forEach((employee) => {
      employee.fecha_ingreso = formatDate(employee.fecha_ingreso);
    });
  }

  return employees;
};

export const createEmployeeService = async (data) => {
  const employee = await createEmployeeRepository(data);

  return employee;
};
