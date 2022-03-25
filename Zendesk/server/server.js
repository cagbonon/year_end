const http = require('http');
const SERVER_PORT = 8000;
const app = require('./app');
const connectDB = require('./config/db');

const server = http.createServer(app);



//Connect Database
connectDB();



server.listen(SERVER_PORT, () => console.log(`Starting on localhost:${SERVER_PORT}`));

module.exports = server;