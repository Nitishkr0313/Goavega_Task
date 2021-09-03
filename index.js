import express from 'express';
//const express =require('express');
import bodyParser from 'body-parser';
import productRoutes from './routes/product.js'

const app=express();
const PORT=5000;

app.use(bodyParser.json());
app.use('/product',productRoutes);
app.get('/',(req,res) => res.send('Hello World!... this is Home Page'));
app.listen(PORT, () => console.log(`server running on port: http://localhost:${PORT}`));