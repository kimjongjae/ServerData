const compression = require('compression');
const express = require('express');
//const excelData = require('');

const app = express();
const port = 3000;

app.use(express.json());
app.use(compression());

app.get('/', (req, res)=>
{
    //const sendData = 
    //res.json({sendData});
    res.send(`<h2>welcome to server</h2>`);
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
});