import {signSchema} from '../schemas/authSchema.js'
import connection from '../dataBase/dbStrategy.js'


 async function validateSign(req, res, next){
    const {email, password} = req.body;

    const {error} = await signSchema.validate(req.body)

    if(error){
        return res.sendStatus(422);    
    }
    
    const {rows} = await connection.query("SELECT * FROM users WHERE email=$1", [email]);

    if(rows[0] == undefined){
        return res.sendStatus(401)
    }
    if(rows[0].email !== email || rows[0].password !== password){
        return res.sendStatus(401)
    }

    next();



}

export default validateSign