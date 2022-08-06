
import connection from '../dataBase/dbStrategy.js'


async function userSession(token, id){
    await connection.query('DELETE FROM sessions WHERE "userId"=$1', [id])

    await connection.query('INSERT INTO sessions(token, "userId") VALUES ($1, $2)', [token, id]);
    
}

export  {userSession};