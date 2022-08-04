import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const authSignUp = async (req, res) =>{
    const {name, email, password} = req.body;
    
    const passwordHash = bcrypt.hashSync(password, 10);

    await connection.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", [name, email, passwordHash]);

    res.sendStatus(201);
}



export const authSign = async (req, res) =>{
    
    const chaveSecret = process.env.SECRET_KEY;

    console.log("chaveSecretddd", chaveSecret)


    const token = jwt.sign({id: req.body.email}, chaveSecret)

    await connection.query('DELETE FROM sessions WHERE "userId"=$1', [res.locals.user.id])

    await connection.query('INSERT INTO sessions(token, "userId") VALUES ($1, $2)', [token, res.locals.user.id]);


    res.status(200).send(token);

}