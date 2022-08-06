import connection from '../dataBase/dbStrategy.js'
import bcrypt from 'bcrypt';
import {getUserDb, insertUser} from '../repository/userRepository.js'

export const getUserMe = async (req, res) =>{
    const token = res.locals.token;
    const {id} = req.params;

    try {
        
        const a = await getUserDb(token);
        
        if(a.rowCount === 0 ){return res.sendStatus(404)}

        res.status(200).send(a.item);

    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }

}

export const authSignUp = async (req, res) =>{
    const {name, email, password} = req.body;
    
    const passwordHash = bcrypt.hashSync(password, 10);
    try {
        insertUser(name, email, passwordHash)
        res.sendStatus(201);
    } catch (error) {
        res.sendStatus(404)
    }
    
}

