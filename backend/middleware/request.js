import Joi from 'joi';

export const validateIdUrl = (req, res, next) => {
  const { id } = req.params;

  const schema = Joi.number().required();

  const { error } = schema.validate(id);

  if (error) {
    return res
      .status(400)
      .json({ message: error.details.map((field) => field.message) });
  }

  next();
};

export const validateBody = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    code: Joi.string().required(),
    description: Joi.string().allow('').required(),
    summary: Joi.string().allow('').required(),
    employee_id: Joi.number().required(),
  });

  const { error } = schema.validate(body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: error.details.map((field) => field.message) });
  }

  next();
};
