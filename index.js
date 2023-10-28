import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import dbConfig from './util/dbConfig.js';
import userRouter from './routes/userRotes.js';
import pharmacyRouter from './routes/pharmacyRoutes.js';
import productRouter from './routes/productRoutes.js';
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan('dev'));

const port = process.env.PORT || 5000;

app.use('/', userRouter);
app.use('/pharmacy', pharmacyRouter);
app.use('/product', productRouter)

dbConfig().then(()=>{
    app.listen(port,()=>{
        console.log('SERVER LISTENING ON PORT ' + port);
    })
})