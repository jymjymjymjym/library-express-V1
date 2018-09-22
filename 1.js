const express = require('express');
const tem = require('art-template');
const path = require('path');

const app = express();
//使express兼容art模版引擎,这里的 art 与下面的 art 对应
app.engine('art', require('express-art-template'));

//设置模板路径
app.set('views', path.join(__dirname,'views'));

//设置模板引擎后缀

app.listen(8080, (req, res)=>{
    console.log('1.js....')
})

app.get('/temp', (req, res)=>{
    res.render(__dirname+'/views/ind.art',{
        user: {
            a: "菠萝",
            b: "香蕉",
            c: "苹果",
            d: '香蕉'
        }
    });
});