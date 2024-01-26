// Import essentials modules
import express from "express";
import cors from "cors";
import { logger } from "logger-express";

import userRouter from "./config/routes/usersRoute";
import loginRouter from "./config/routes/loginRoute"; //Possible error: need .js

const app = express();
const PORT = (process.env.PORT = 3000);

//Declare middlewares
app.use(express.json());
app.use(cors());
app.use(logger());
app.use("/", userRouter);
app.use("/", loginRouter);

app.listen(PORT, console.log(`Server ON, PORT: ${PORT}`));
