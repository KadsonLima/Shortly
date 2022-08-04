import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';


export const authSignUp = async (req, res) =>{
    const {name, email, password, confirmPassword} = req.body;
    
    await connection.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", [name, email, password]);

    res.sendStatus(201);
}



export const authSign = async (req, res) =>{
    
    const chaveSecret = process.env.SECRET_KEY;

    console.log("chaveSecretddd", chaveSecret)


    const token = jwt.sign({id: req.body.email}, chaveSecret, {expiresIn:'1m'})


    console.log("token", token)

    res.status(200).send(token);

}