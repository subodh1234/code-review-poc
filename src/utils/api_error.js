class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '', additionalAttributes = null) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.additionalAttributes = additionalAttributes;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

module.exports = ApiError;
