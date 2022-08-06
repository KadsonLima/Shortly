import connection from '../dataBase/dbStrategy.js'


async function urlRanking(){

   return await connection.query(`
   SELECT u1.id, u1.name, SUM(urls."visitCount") as "visitCount", COUNT(urls."userId") as "linksCount" 
   FROM users u1 
   JOIN urls ON urls."userId" = u1.id
   GROUP BY u1.id
   ORDER BY "visitCount" DESC`)
    
}

export  {urlRanking};
