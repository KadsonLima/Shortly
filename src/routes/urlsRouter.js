import { Router } from "express";
import { getUrlById } from "../controllers/getUrlById.js";
import { getUrl } from "../controllers/getUrlController.js";
import { shortenUrl } from "../controllers/shortenController.js";
import { validarToken } from "../middlewares/validateToken.js";



const urlRouter = Router();


urlRouter.post('/urls/shorten',validarToken, shortenUrl);
urlRouter.get('/urls/open/:shortUrl', getUrl);
urlRouter.get('/urls/:id', getUrlById);

export default urlRouter;