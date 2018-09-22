const express = require('express');
const tem = require('art-template');
const router = require('./router.js')
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.listen(8080, (req, res)=>{
    console.log('running....')
})

//设置模板引擎
app.engine('art', require('express-art-template'));
app.set('views', path.join(__dirname,'views'));

//处理请求参数
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())

//启动静态资源服务器
app.use('/www', express.static('style'))

//配置路由
app.use(router)