import { Router } from "express";
import { authSign } from "../controllers/authController.js";
import { authSignUp } from "../controllers/userController.js";
import validateSign from "../middlewares/validateSign.js";
import validateSignUp from "../middlewares/validateSignUp.js";



const authRouter = Router();


authRouter.post('/signin',validateSign, authSign);
authRouter.post('/signup',validateSignUp, authSignUp);


export default authRouter;
