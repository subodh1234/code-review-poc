const Joi = require('@hapi/joi');

const createMessage = {
  body: Joi.object().keys({
    text: Joi.string().required().max(500),
  }),
};

module.exports = {
  createMessage,
};
