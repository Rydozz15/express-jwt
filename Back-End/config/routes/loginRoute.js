import express from "express";
import { validateLogin } from "../../validators/loginValidator.js";
import { loginUser } from "../../src/controllers/loginController.js";

const router = express.Router();

router.post("/login", validateLogin, loginUser);

export default router;
