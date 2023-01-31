import { Request, Response } from "express";
// import { body, validationResult } from "express-validator";
// import { hash } from "bcrypt";

class UsersController {
  async create(req: Request, res: Response) {
    const {
      name,
      email,
      birth,
      cep,
      address,
      city,
      state,
      password,
      confirmPassword,
    } = req.body;

    return res.json({
      name,
      email,
      birth,
      cep,
      address,
      city,
      state,
      password,
      confirmPassword,
    });
  }
}

module.exports = UsersController;
