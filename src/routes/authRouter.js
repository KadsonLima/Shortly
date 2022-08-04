import { Router } from "express";
import { authSign, authSignUp } from "../controllers/authController.js";
import validateSign from "../middlewares/validateSign.js";
import validateSignUp from "../middlewares/validateSignUp.js";



const authRouter = Router();


authRouter.get('/sign',validateSign, authSign);
authRouter.get('/signup',validateSignUp, authSignUp);

export default authRouter;