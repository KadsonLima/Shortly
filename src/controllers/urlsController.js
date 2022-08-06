import connection from '../dataBase/dbStrategy.js'
import jwt from 'jsonwebtoken';
import { shortyUrl , getUrls, deleteDb, urlById} from '../repository/urlsRepository.js';


export const shortenUrl = async (req, res) =>{
    const email = res.locals.id;
    const {url} = req.body;

    if(!url){return res.sendStatus(422)}
    
    try {

        const shortUrl = await shortyUrl(email, url)

        res.status(201).send({shortUrl});

    } catch (error) {
        console.log(error)
        res.status(422).send(error);
    }

}

export const getUrl = async (req, res) =>{
    const {shortUrl} = req.params;

    try {

        const url = await getUrls(shortUrl);
        return res.redirect(url);

    } catch (error) {
        console.log(error)
        return res.sendStatus(404);
    }

}



export const deleteUrl = async (req, res) =>{
    const {id} = req.params;
    const token = res.locals.token;
       try {

            const result = await deleteDb(id, token, res.locals.user.userId) 
           res.sendStatus(result)

       } catch (error) {
        console.log(error)
           res.sendStatus(401)
       }    
   }
   
   export const getUrlById = async (req, res) =>{
    const {id} = req.params;

    try {
        const {dadosUrl, rowCount} = await urlById(id)
       
        if(rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send(dadosUrl);

    } catch (error) {
        res.sendStatus(404)
    }   

}


//ranking SELECT u1.id, u1.name, SUM(urls."visitCount") as "visitCount", COUNT(urls."userId") as "linksCount" FROM users u1 
//JOIN urls ON urls."userId" = u1.id
//GROUP BY u1.id
//ORDER BY "visitCount" DESC
//LIMIT 10