const { assign } = require('lodash');
const httpStatus = require('http-status');

const config = require('../config/config');
const ApiError = require('../utils/api_error');

const errorConverter = (err, _req, _res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(
      statusCode,
      message,
      false,
      err.stack,
      err.additionalAttributes,
    );
  }
  next(error);
};

const errorHandler = (err, _req, res, _next) => {
  let { statusCode, message } = err;
  if (config.env === 'production' && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  res.locals.errorMessage = err.message;

  const response = assign(
    {
      error: 'true',
      code: statusCode,
      message,
    },
    err.additionalAttributes || null,
  );

  if (config.env === 'development') {
    console.error(err);
  }
  res.status(statusCode).send(response);
};

module.exports = {
  errorConverter,
  errorHandler,
};
