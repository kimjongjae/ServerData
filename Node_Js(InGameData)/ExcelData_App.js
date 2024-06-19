const compression = require('compression');
const express = require('express');
const excelData = require('./JsonData_Return');
console.log(String.fromCharCode(27) + "]0;" + "ExcelData_Server" + String.fromCharCode(7));

const app = express();
const port = 4000;

app.use(express.json());
app.use(compression());

app.get('/api/data', (req, res)=>
{
    //const sendData = 
    //res.json({sendData});
    res.send(excelData.GetAllJsonData());
});

app.listen(port, ()=>
{
   console.log(`SERVER 실행됨 ${port}`); 
}); 
