const express = require('express');
const router = require('./router')
const bodyParser = require('body-parser');

const app = express();

app.listen(8080,()=>{
    console.log("runcint...")
})

app.use(bodyParser.urlencoded({extended: false}));  //bodyParse必须得放路由上面
app.use(router);

app.use('/www', express.static('public'))