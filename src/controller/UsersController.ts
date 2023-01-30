import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class UsersController {
  async create(req: Request, res: Response) {
    const { name, email, birth, cep, address, city, state, password } =
      req.body;

    if (
      !name ||
      !email ||
      !birth ||
      !cep ||
      !address ||
      !city ||
      !state ||
      !password
    ) {
      throw new AppError("COLOQUE TUDO");
    }

    return res.json({ name, password });
  }
}

module.exports = UsersController;
