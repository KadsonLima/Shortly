import { Router } from "express";
import { getUrl } from "../controllers/getUrlController.js";
import { shortenUrl } from "../controllers/shortenController.js";
import { validarToken } from "../middlewares/validateToken.js";



const urlRouter = Router();


urlRouter.post('/urls/shorten',validarToken, shortenUrl);
urlRouter.get('/urls/open/:shortUrl', getUrl);

export default urlRouter;