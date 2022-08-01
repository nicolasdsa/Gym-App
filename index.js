const express = require("express");
const server = express();
const bodyParser = require('body-parser');
const database = require('./utils/database');
const authRouter = require("./services/auth");
const clientRouter = require('./services/client');
const measurentsRouter = require('./services/measurents');
server.use(bodyParser.json());

server.listen(3000, async () => {
  await database.init();
  console.log('alo');
})

server.use("/auth", authRouter);
server.use("/client", clientRouter);
server.use('/measurents', measurentsRouter);