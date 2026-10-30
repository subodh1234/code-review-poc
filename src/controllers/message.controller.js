const catchAsync = require('../utils/catch_async');
const messageService = require('../services/message.service');

const createMessage = catchAsync(async (req, res) => {
  const data = messageService.createMessage(req.body.text);
  res.send({ data });
});

module.exports = {
  createMessage,
};
