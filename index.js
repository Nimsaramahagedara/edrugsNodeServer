import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConfig from './util/dbConfig.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 10000;

dbConfig().then(()=>{
    app.listen(port,()=>{
        console.log('SERVER LISTENING ON PORT ' + port);
    })
})