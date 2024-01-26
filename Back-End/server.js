// Import essentials modules
import express from "express";
import cors from "cors";
import { logger } from "logger-express";

//import *routes

const app = express();
const PORT = (process.env.PORT = 3000);

//Declare middlewares
app.use(express.json());
app.use(cors());
app.use(logger());
//app.use("/",*Routes)

app.listen(PORT, console.log(`Server ON, PORT: ${PORT}`));
