import { checkByEmail } from "../models/userModel.js";

const profileUser = async (req, res) => {
  const token = req.header("Authorization").split(" ")[1];
  const { email } = req.user;
  try {
    checkByEmail(email);
    const findUser = await checkByEmail(email);
    res.status(200).json({
      user: {
        email: findUser.email,
        rol: findUser.rol,
        lenguage: findUser.lenguage,
      },
      code: 200,
      token: token,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export { profileUser };
