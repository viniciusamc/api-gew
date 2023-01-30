import { Router } from "express";

const usersRouter = require("./users.routes");

const routes = Router();

routes.use("/users", usersRouter);

module.exports = routes;
