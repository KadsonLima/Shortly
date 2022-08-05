import connection from '../dataBase/dbStrategy.js'


export const getUrlById = async (req, res) =>{
 console.log(req.params)
    const {id} = req.params;


    try {
        const {rows:{[0]:dadosUrl}, rowCount} = await connection.query('SELECT * FROM urls WHERE id=$1', [id])

        
        if(rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send(dadosUrl);

    } catch (error) {
        console.log("url Mão encontrada")
        res.sendStatus(404)
    }

    


}
