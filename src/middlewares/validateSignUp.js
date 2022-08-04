import {signUpSchema} from '../schemas/authSchema.js'
import connection from '../dataBase/dbStrategy.js'


 async function validateSignUp(req, res, next){
    const {email, confirmpassword:confirmPassword} = req.body;

    const {error} = await signUpSchema.validate(req.body)

    if(error){
        return res.sendStatus(422);    
    }
    
    const emailRepetido = await connection.query(`SELECT * FROM users WHERE email=$1`, [email])

    if(emailRepetido.rowCount > 0) {return res.sendStatus(409)}

    next();



}

export default validateSignUp