const express = require("express");
const app = require("./app");
const database = require("./database");
const bodyParser = require("body-parser");
const config = require("./config");

database()
  .then(info => {
    console.log(`Connected to ${info.host}:${info.port}/${info.name}`);
    app.listen(config.PORT, () =>
      console.log(`Example app listening on port ${config.PORT}!`)
    );
  })
  .catch(() => {
    console.error("Unable to connect to database");
    process.exit(1);
  });
