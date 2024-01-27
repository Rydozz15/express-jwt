import { createUser } from "../models/userModel.js";

const createNewUser = async (req, res) => {
  try {
    //const { user } = req.body;

    const { email, password, rol, lenguage } = req.body;
    const newUser = await createUser(email, password, rol, lenguage);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json(error);
  }
};

export { createNewUser };
