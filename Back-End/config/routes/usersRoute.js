import express from "express";
import { validateUser } from "../../validators/userValidator.js";
import { createNewUser } from "../../src/controllers/userController.js";
import { tokenChecker } from "../../middlewares/tokenChecker.js";
import { profileUser } from "../../src/controllers/profileController.js";

const router = express.Router();

router.post("/usuarios", validateUser, createNewUser);
router.get("/usuarios", tokenChecker, profileUser);

export default router;
