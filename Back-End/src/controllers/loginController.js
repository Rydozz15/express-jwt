import { checkByEmail } from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await checkByEmail(email);
    if (!findUser) {
      throw new Error("Email incorrecto");
    }
    console.log("SI 1", findUser);
    const isPasswordValid = bcrypt.compareSync(password, findUser.password);
    console.log("SI 2");

    if (!isPasswordValid) {
      throw new Error("Contraseña incorrecta");
    } else {
      const { email, rol, lenguage } = findUser;
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({
        user: {
          email: email,
          rol: rol,
          lenguage: lenguage,
        },
        code: 200,
        token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export { loginUser };
