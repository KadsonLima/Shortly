import connection from '../dataBase/dbStrategy.js'


export const getUserMe = async (req, res) =>{
    const token = res.locals.token;
    const {id} = req.params;


    try {
        const {rows:{[0]:{id, name, visitCount}}, rowCount} = await connection.query(`
        SELECT u1.id, u1.name , SUM(urls."visitCount") as "visitCount" FROM users u1 
        JOIN urls ON urls."userId" = u1.id 
        JOIN sessions s ON s."userId" = u1.id
        WHERE s.token = $1
        GROUP BY u1.id
        `, [token])

        const {rows:shortenedUrls} = await connection.query('SELECT * FROM urls WHERE urls."userId"=$1', [id])

        if(rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send({id, name, visitCount,shortenedUrls});

    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }

    


}
