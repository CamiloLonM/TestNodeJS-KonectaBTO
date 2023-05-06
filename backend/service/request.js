import {
  getRequestsRepository,
  createRequestRepository,
  deleteRequestByIdRepository,
  getRequestByIdRepository,
} from '../repository/request.js';
import { getEmployeeByIdRepository } from '../repository/employee.js';

export const getRequestsService = async () => {
  const requests = await getRequestsRepository();

  return requests;
};

export const createRequestService = async (data) => {
  const employee = await getEmployeeByIdRepository(data.employee_id);

  if (!employee) {
    // Check error handling to return JSON and not throw error.
    throw new Error(`There's no employee with id ${data.employee_id}`);
  }

  const request = await createRequestRepository(data);

  return request;
};

export const deleteRequestByIdService = async (id) => {
  const request = await getRequestByIdRepository(id);

  if (!request) {
    // Check error handling to return JSON and not throw error.
    throw new Error(`There's no request with id ${id}`);
  }

  await deleteRequestByIdRepository(id);
};
