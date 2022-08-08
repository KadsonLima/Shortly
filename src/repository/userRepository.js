import connection from '../dataBase/dbStrategy.js'


async function insertUser(name, email, passwordHash){
    return await connection.query("INSERT INTO users(name, email, password) VALUES ($1, $2, $3)", [name, email, passwordHash]);
    
}

async function getUserDb(token){

    const {rows:{[0]:{id, name, visitCount}}, rowCount} = await connection.query(`
        SELECT u1.id, u1.name , COALESCE(SUM(urls."visitCount"), 0) as "visitCount" FROM users u1 
        LEFT JOIN urls ON urls."userId" = u1.id 
        LEFT JOIN sessions s ON s."userId" = u1.id
        WHERE s.token = $1
        GROUP BY u1.id
        `, [token])


    const {rows:shortenedUrls} = await connection.query('SELECT * FROM urls WHERE urls."userId"=$1', [id])

    const item = {id, name, visitCount,shortenedUrls}

    return {item, rowCount};
}

export  {insertUser, getUserDb};