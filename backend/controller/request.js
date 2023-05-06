import {
  getRequestsService,
  createRequestService,
  deleteRequestByIdService,
} from '../service/request.js';

export const getRequestsController = (req, res, next) => {
  try {
    const employees = getRequestsService();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const createRequestController = (req, res, next) => {
  try {
    const employee = createRequestService();

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};

export const deleteRequestByIdController = (req, res, next) => {
  try {
    const employee = deleteRequestByIdService();

    return res.sendStatus(201);
  } catch (error) {
    next(error);
  }
};
