import { Router } from "express";
import { shortenUrl } from "../controllers/shortenController.js";
import { validarToken } from "../middlewares/validateToken.js";



const urlRouter = Router();


urlRouter.post('/urls/shorten',validarToken, shortenUrl);

export default urlRouter;