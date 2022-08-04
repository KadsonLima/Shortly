import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';
import {nanoid} from 'nanoid';



export const shortenUrl = async (req, res) =>{
    const email = res.locals.id;

    const {url} = req.body;
    try {
        const {rows} = await connection.query("SELECT users.id FROM users WHERE users.email=$1", [email])
        const user = rows[0].id;
        const urlShort = await connection.query('INSERT INTO "urlShorten"(url, "urlShorty") VALUES ($1, $2)', [url, nanoid()]);

        console.log(urlShort)
    } catch (error) {
        console.log(error)
    }



    res.sendStatus(200);
}
