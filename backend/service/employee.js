import { formatDate } from '../helpers/date.js';
import {
  createEmployeeRepository,
  getEmployeeByNameRepository,
  getEmployeesRepository,
  getEmployeesSelectRepository,
} from '../repository/employee.js';

export const getEmployeesService = async () => {
  const employees = await getEmployeesRepository();

  employees.forEach((employee) => {
    employee.admission_date = formatDate(employee.admission_date);
  });

  return employees;
};

export const getEmployeesSelectService = async () => {
  const employees = await getEmployeesSelectRepository();

  return employees;
};

export const getEmployeeByNameService = async (name) => {
  const employees = await getEmployeeByNameRepository(name);

  if (employees) {
    employees.forEach((employee) => {
      employee.admission_date = formatDate(employee.admission_date);
    });
  }

  return employees;
};

export const createEmployeeService = async (data) => {
  const employee = await createEmployeeRepository(data);

  return employee;
};
