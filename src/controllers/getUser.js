import connection from '../dataBase/dbStrategy.js'


export const getUserMe = async (req, res) =>{
    const token = res.locals.token;
    const {id} = req.params;


    try {
        const {rows:{[0]:dadoUser}, rowCount} = await connection.query('SELECT * FROM users JOIN sessions ON "userId"=users.id JOIN urls ON users.id=urls."userId" WHERE sessions.token=$1', [token])

        
        if(rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send(dadoUser);

    } catch (error) {
        console.log("url Mão encontrada")
        res.sendStatus(404)
    }

    


}
