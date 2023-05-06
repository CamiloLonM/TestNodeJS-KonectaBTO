import {
  getRequestsService,
  createRequestService,
  deleteRequestByIdService,
} from '../service/request.js';

export const getRequestsController = async (req, res, next) => {
  try {
    const requests = await getRequestsService();

    return res.status(200).json(requests);
  } catch (error) {
    next(error);
  }
};

export const createRequestController = async (req, res, next) => {
  try {
    const { body } = req;
    const employee = await createRequestService(body);

    return res.status(201).json(employee);
  } catch (error) {
    next(error);
  }
};

export const deleteRequestByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteRequestByIdService(id);

    return res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
