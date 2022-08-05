import connection from '../dataBase/dbStrategy.js'


export const getUrl = async (req, res) =>{
 console.log(req.params)
    const {shortUrl} = req.params;


    try {
        const {rows:{[0]:dadosUrl}} = await connection.query('SELECT * FROM urls WHERE "shortUrl"=$1', [shortUrl])

        res.redirect(dadosUrl.url)

        await connection.query('UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id=$1', [dadosUrl.id])

        console.log('incrementado')
    } catch (error) {
        console.log("url Mão encontrada")
        res.sendStatus(404)
    }

    


}
