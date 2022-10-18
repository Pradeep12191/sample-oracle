import 'tsconfig-paths/register';
import app from './app';

import http from 'http';
import oracledb from 'oracledb';
import debug from 'debug';
import { socket } from '@helpers';
const debugNode = debug("node-angular");


const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }
  if (port >= 0) {
    // port number
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debugNode("Listening on " + bind);
};

const port = normalizePort(3000);
console.log(port);
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("listening", onListening);

oracledb.getConnection({
  user: "HR",
  password: "oracle",
  connectString: "localhost:1521/xepdb1"
}).then(async () => {
  server.listen(port);
  console.log('connected to database');
  const io = socket.init(server);

  io.on('connection', (socket) => {
    console.log('live connection established');
    socket.on('disconnect', () => {
      console.log('live connection destroyed');
    })
  });
  console.log('server listening to ' + port);
}).catch(err => {
  console.log(err);
});