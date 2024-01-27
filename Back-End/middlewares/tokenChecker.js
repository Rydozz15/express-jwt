import jwt from "jsonwebtoken";

const tokenChecker = async (req, res, next) => {
  try {
    if (!req.header("Authorization")) {
      throw new Error("token no encontrado");
    }
    const token = req.header("Authorization").split(" ")[1];
    const tokenData = await validateToken(token);
    req.user = tokenData;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json(error);
  }
};

const validateToken = async (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (err) {
    throw new Error("Token inválido");
  }
};

export { tokenChecker };
