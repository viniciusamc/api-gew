const { Router } = require("express");

const UserController = require("../controller/UsersController.ts");

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", userController.create);

module.exports = userRoutes;
