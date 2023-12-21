const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/weather.routes');

const server = express();

server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

server.use(morgan('dev'));
server.use(cookieParser());
server.use(cors());
server.use("/", routes);

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });
  
  server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });
  
  module.exports = server;
  