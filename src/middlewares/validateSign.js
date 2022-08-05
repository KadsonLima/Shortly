import {signSchema} from '../schemas/authSchema.js'
import connection from '../dataBase/dbStrategy.js'
import bcrypt from 'bcrypt';

 async function validateSign(req, res, next){
    const {email, password} = req.body;

    const {error} = await signSchema.validate(req.body)



    if(error){
        return res.sendStatus(422);    
    }
    
    console.log("ERRO È POR CAUSA DO BD")

    const {rows} = await connection.query("SELECT * FROM users WHERE email=$1", [email]);

    if(rows[0] == undefined){
        return res.sendStatus(422)
    }

    console.log(bcrypt.compareSync(password, rows[0].password))

    if(rows[0].email !== email || !bcrypt.compareSync(password, rows[0].password)){
        return res.sendStatus(422)
    }
    res.locals.user = rows[0];

    next();



}

export default validateSign