import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { insertUser} from '../repository/userRepository.js';
import { userSession } from '../repository/sessionRepository.js';




export const authSign = async (req, res) =>{
    
    const chaveSecret = process.env.SECRET_KEY;

    const token = jwt.sign({id: req.body.email}, chaveSecret)

    userSession(token, res.locals.user.id)

    res.status(200).send(token);

}