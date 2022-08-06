import { Router } from "express";
import { getUserMe } from "../controllers/userController.js";
import { validarToken } from "../middlewares/validateToken.js";



const userRouter = Router();


userRouter.get('/users/me',validarToken, getUserMe);

export default userRouter;