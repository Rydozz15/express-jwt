import { body } from "express-validator";
import { validationHelper } from "../src/helpers/validateHelper.js";

const validateUser = [
  body("email").exists().notEmpty().isEmail(),
  body("password").exists().notEmpty(),
  body("rol").exists().notEmpty(),
  body("lenguage").exists().notEmpty(),
  (req, res, next) => {
    validationHelper(req, res, next);
  },
];

export { validateUser };
