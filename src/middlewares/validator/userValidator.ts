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
    .withMessage("Preencha o CEP corretamente"),
  check("address").not().isEmpty().withMessage("Preencha o endereço"),
  check("state").not().isEmpty().withMessage("Preencha a cidade"),
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
