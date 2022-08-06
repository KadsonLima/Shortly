import connection from '../dataBase/dbStrategy.js'
import {nanoid} from 'nanoid';


async function urlRanking(){

   return await connection.query(`
   SELECT u1.id, u1.name, SUM(urls."visitCount") as "visitCount", COUNT(urls."userId") as "linksCount" 
   FROM users u1 
   JOIN urls ON urls."userId" = u1.id
   GROUP BY u1.id
   ORDER BY "visitCount" DESC`)
    
}

async function shortyUrl(email, url){

   const {rows} = await connection.query("SELECT users.id FROM users WHERE users.email=$1", [email])
      const user = rows[0].id;
      const urlShort = nanoid();   

      await connection.query('INSERT INTO urls(url, "shortUrl", "userId") VALUES ($1, $2, $3)', [url, urlShort, user]);

      return urlShort;
    
}

async function getUrls(url){

   const {rows:{[0]:dadosUrl}} = await connection.query('SELECT * FROM urls WHERE "shortUrl"=$1', [url])

   await connection.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id=$1', [dadosUrl.id])

   return dadosUrl.url
}


async function deleteDb(idUrl, token, userId){


   const {rows:{[0]:url},rowCount: urlTokenVerify} = await connection.query(`SELECT * FROM urls WHERE urls.id=$1 `, [idUrl])

   if(urlTokenVerify === 0 ){return 404}

   if(url.userId !== userId){return 401}

   await connection.query(`
            DELETE FROM urls USING sessions s WHERE s.token=$1 AND s."userId"=urls."userId"
            AND urls.id=$2
           `, [token, idUrl])
   return 204


}

async function urlById(idUrl){


   const {rows:{[0]:dadosUrl}, rowCount} = await connection.query('SELECT u.id, u.url, u."shortUrl" FROM urls u WHERE id=$1', [idUrl])
   console.log(dadosUrl, rowCount)
   return {dadosUrl, rowCount}

}


export  {urlRanking,shortyUrl, getUrls, deleteDb, urlById};
