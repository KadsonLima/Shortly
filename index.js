import express, {json} from 'express';
import cors from 'cors';
import {router} from './src/routes/router.js';
import dotenv from 'dotenv';
dotenv.config()


const App = express();

App.use(cors());
App.use(json());

App.use(router)

const PORT = process.env.PORT

App.listen(PORT, ()=>{
    console.log("Server rodando")
})