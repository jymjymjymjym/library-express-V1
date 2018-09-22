const express = require('express');
const tem = require('art-template');

const app = express();
//使express兼容art模版引擎
app.engine('art', require('express-art-template'));

app.set

app.listen(8080, (req, res)=>{
    console.log(__dirname)
})

app.get('/temp', (req, res)=>{
    res.send(__dirname);
});