import express from "express";
import "express-async-errors";
import { AppDataSource } from "./data-source";
const routes = require("./routes/index");
const axios = require("axios");
AppDataSource.initialize().then(() => {
  const app = express();

  app.use(express.json());

  app.use(routes);

  app.get("/", (req, res) => {
    return res.json("Rodando");
  });

  return app.listen(process.env.PORT);
});
