const app = require('./app');
const config = require('./config/config');

const server = app.listen(config.port, () => {
  console.log(`Listening to port ${config.port}`);
});

module.exports = server;
