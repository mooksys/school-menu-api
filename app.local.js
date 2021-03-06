const os = require('os');
const process = require('process');

const app = require('./app');
const port = os.type() === 'Darwin' ? 8080 : process.env.PORT || 80;

app.listen(port);