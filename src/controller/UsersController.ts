import { Request, Response } from "express";
import { userRepository } from "../repositories/userRepository";
import { ApiError } from "../utils/AppError";
const bcrypt = require("bcrypt");
const axios = require("axios");

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

    if (password != confirmPassword) {
      throw new ApiError("Senhas não conferem", 400);
    }

    const emailVerify = await userRepository.find({ where: { email } });

    if (Object.keys(emailVerify).length !== 0) {
      throw new ApiError("Email já existente", 400);
    }

    const passwordHashed = await bcrypt.hash(password, 10);

    const apiCEP = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const newUser = userRepository.create({
      name,
      email,
      birth,
      cep,
      address: apiCEP.data.logradouro,
      city: apiCEP.data.localidade,
      state: apiCEP.data.uf,
      password: passwordHashed,
    });
    await userRepository.save(newUser);

    return res.status(201).json({
      name,
      email,
      birth,
      cep,
      address: apiCEP.data.logradouro,
      city: apiCEP.data.localidade,
      state: apiCEP.data.uf,
      passwordHashed,
    });
  }
}

module.exports = UsersController;
