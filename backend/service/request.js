import {
  getRequestsRepository,
  createRequestRepository,
  deleteRequestByIdRepository,
} from '../repository/request.js';

export const getRequestsService = () => {
  getRequestsRepository();
};

export const createRequestService = () => {
  createRequestRepository();
};

export const deleteRequestByIdService = () => {
  deleteRequestByIdRepository();
};
