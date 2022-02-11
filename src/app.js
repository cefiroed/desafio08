const express = require('express');
const productsRouter = require('./routes/products');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use('/api/products',productsRouter);
app.use(express.static(__dirname+'/public'))

const PORT = 8080;

const server = app.listen(PORT,()=>console.log(`listening on ${PORT}`));