const express = require("express");
const cors = require("cors");
// const apiRouter = require("../app/routes/v1/api");
const config = require("../app/config");

const startServer = () => {
  const expressApplication = express();
  expressApplication.listen(config.port, (err) => {
    if (err) {
      console.log(err);
      ProcessingInstruction.exit(1);
    }
    console.log("SERVER STARTED:", config.port);
  });
  return expressApplication;
};

module.exports = () => {
  const app = startServer();
  app.use(cors());
  app.use(express.json());
  // api/v1 + route name
  // app.use(config.api.prefix. apiRouter);
  return app;
};
