const { Router } = require("express");

const UserController = require("../controller/UsersController.ts");

const { validateUser } = require("../middlewares/validator/userValidator.ts");

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", validateUser, userController.create);

module.exports = userRoutes;
