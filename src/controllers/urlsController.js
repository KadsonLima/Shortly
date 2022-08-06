import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';
import {nanoid} from 'nanoid';



export const shortenUrl = async (req, res) =>{
    const email = res.locals.id;
    const {url} = req.body;

    if(!url){return res.sendStatus(422)}
    
    try {
        const {rows} = await connection.query("SELECT users.id FROM users WHERE users.email=$1", [email])
        const user = rows[0].id;
        const urlShort = nanoid();   

        await connection.query('INSERT INTO urls(url, "shortUrl", "userId") VALUES ($1, $2, $3)', [url, urlShort, user]);

        res.status(201).send({"shortUrl":urlShort});


    } catch (error) {
        console.log(error)
    }



}

export const getUrl = async (req, res) =>{
    console.log("ESAEASE", req.params)
    const {shortUrl} = req.params;


    try {
        const {rows:{[0]:dadosUrl}} = await connection.query('SELECT * FROM urls WHERE "shortUrl"=$1', [shortUrl])

        await connection.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id=$1', [dadosUrl.id])

        return res.redirect(dadosUrl.url)


    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }

    
}



export const deleteUrl = async (req, res) =>{
    const {id} = req.params;
    const token = res.locals.token;
        console.log("ID e TOKEN", id, token)
       try {
           const {rowCount} = await connection.query(`
           DELETE FROM urls
            USING sessions s
            WHERE s.token=$1
            AND s."userId"=urls."userId"
            AND urls.id=$2
           `, [token, id])

            if(rowCount === 0 ){return res.sendStatus(401)}

           res.sendStatus(204)

           console.log('incrementado')
       } catch (error) {
        console.log(error)
           res.sendStatus(401)
       }
   
       
   }
   
   export const getUrlById = async (req, res) =>{
    const {id} = req.params;

    try {
        const {rows:{[0]:dadosUrl}, rowCount} = await connection.query('SELECT u.id, u.url, u."shortUrl" FROM urls u WHERE id=$1', [id])

        if(rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send(dadosUrl);

    } catch (error) {
        res.sendStatus(404)
    }   

}
