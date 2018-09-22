const express = require('express')
const bodyParser = require('body-parser');
const base = require ('./db').base;

const app = express();
app.listen(8080, ()=>{
    console.log('runnig...')
});

app.use(bodyParser.urlencoded({extended: false}));

app.use('/www', express.static('public'))

app.post('/check', (req, res)=>{
    let query = req.body;

    let sql = `select count(*) as total from user where username=? and password=?`;
    data = [query.name, query.pass];
    console.log(req.body)

    base(sql, data, (result)=>{
        if(result[0].total > 0){
            console.log(result);
            res.send('sucess login');
        }else{
            res.send('login fail');
        }
    })
})