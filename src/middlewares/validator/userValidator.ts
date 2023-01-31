import { NextFunction, Request, Response } from "express";

const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("name").not().isEmpty().withMessage("Preencha o usuário"),
  check("email")
    .not()
    .isEmpty()
    .trim()
    .escape()
    .isEmail()
    .normalizeEmail()
    .withMessage("Preencha o email!"),
  check("birth").not().trim(),
  check("cep")
    .not()
    .isEmpty()
    .isInt()
    .isLength({ min: 8, max: 8 })
    .withMessage("CEP inválido. Por favor, preencha com um CEP válido."),
  check("address")
    .not()
    .isEmpty()
    .withMessage(
      "Endereço inválido. Por favor, preencha com um endereço válido."
    ),
  check("state")
    .not()
    .isEmpty()
    .withMessage("Cidade inválida. Por favor, preencha com uma cidade válida."),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Preencha a senha")
    .isLength({ min: 8, max: 256 })
    .withMessage("Minimo 8 caracteres"),
  check("confirmPassword")
    .not()
    .isEmpty()
    .withMessage("Preencha a senha")
    .isLength({ min: 8, max: 256 })
    .withMessage("Minimo 8 caracteres"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  },
];
