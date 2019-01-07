import express from 'express';
import cors from 'cors'; 
import BodyParser from 'body-parser';
import mongoose from 'mongoose';

const app=express();
const router = express.Router();
app.use(cors);
app.use(BodyParser.json());
mongoose.connect('');
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('connection is esablish');
})
app.use('/'.router);


//app.get('/',(req,res)=>res.send('Hello world!'));
app.listen(4000,()=>console.log('Express runnig on 4000port'));
