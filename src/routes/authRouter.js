import { Router } from "express";
import { authSign, authSignUp } from "../controllers/authController.js";



const authRouter = Router();


authRouter.get('/sign', authSign);
authRouter.get('/signup', authSignUp);

export default authRouter;