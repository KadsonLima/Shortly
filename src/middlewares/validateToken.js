import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';


export const validarToken = async (req, res , next)=>{
    const authorization = req.headers['authorization'];
    
    const token = authorization && authorization.split(" ")[1]
    
    try {
        const result = await jwt.verify(token, process.env.SECRET_KEY);
        res.locals.id = result.id;

    } catch (error) {
        return res.sendStatus(422);
    }
    

    next();
}
