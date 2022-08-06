import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';


export const validarToken = async (req, res , next)=>{
    const authorization = req.headers['authorization'];
    
    const token = authorization && authorization.split(" ")[1]
    
    try {
        const {rows:{[0]:user},rowCount} = await connection.query('SELECT * FROM sessions WHERE token=$1', [token]);

        if(rowCount === 0) {return res.sendStatus(401);}
        
        const result = await jwt.verify(token, process.env.SECRET_KEY);
        res.locals.id = result.id;
        res.locals.token = token;
        res.locals.user = user;

    } catch (error) {
        console.log(error)
        return res.sendStatus(401);
    }
    

    next();
}
