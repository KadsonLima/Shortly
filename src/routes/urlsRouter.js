import { Router } from "express";
import { shortenUrl, deleteUrl, getUrl, getUrlById} from "../controllers/urlsController.js";
import { validarToken } from "../middlewares/validateToken.js";



const urlRouter = Router();


urlRouter.post('/urls/shorten',validarToken, shortenUrl);
urlRouter.get('/urls/open/:shortUrl', getUrl);
urlRouter.get('/urls/:id', getUrlById);
urlRouter.delete('/urls/:id',validarToken, deleteUrl);

export default urlRouter;