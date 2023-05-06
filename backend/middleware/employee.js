import Joi from 'joi';

export const validateNameUrl = (req, res, next) => {
  const { name } = req.params;

  const schema =
    Joi.string()
    .required();

  const { error } = schema.validate(name);

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
    name: Joi.string()
      .min(5)
      .max(50)
      .message({
        'string.min': 'Name at least need to have 5 characters.',
        'string.max': 'Name cannot have more than 50 characters.',
      })
      .required(),
    admission_date: Joi.date().required(),
    salary: Joi.number().required(),
  });

  const { error } = schema.validate(body, { abortEarly: false });

  if (error) {
    return res
      .status(400)
      .json({ message: error.details.map((field) => field.message) });
  }

  next();
};
