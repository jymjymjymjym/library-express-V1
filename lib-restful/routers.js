/**************
 * 业务模块
 * *************/
const fs = require('fs');
const path = require('path');
const base = require('../mydb/db').base;


exports.showindex = (req, res)=>{
    let sql = "select * from libsql"
    base(sql, null, (result)=>{
            res.json(result);
    });
}

//跳转到添加图书的页面
exports.toAdd = (req, res)=>{
    let rs=fs.createReadStream('./views/addPage.html', (err,data)=>{
        if(err){
            console.log('读取错误')
        }
    })

    rs.on('end', (e)=>{
        console.log('读取成功')
    })
    rs.pipe(res)


}

//提交表单POST
exports.add = (req, res)=>{
    let info = req.body;
    console.log(req.body);
    let sql = `insert into libsql set ?`;
    let data = {
        name: info.name,
        autor: info.autor,
        category: info.category,
        descript: info.desc
    }
    base(sql, data, (result)=>{
        if(result.affectedRows==1){
           res.json({flag: 1})
        }else{
           res.json({flag: 2})
        }
    })
}

exports.toEdit = (req, res)=>{
    let id = req.params.id;
    let sql = 'select * from libsql where id=?'
    let data = [id]
    base(sql, data, (result)=>{
        res.json(result[0])
    })
}

exports.edit = (req, res)=>{
    let id = req.body.id;
    console.log(req.body)
    let info = req.body;

    let sql = "update libsql set name=?,autor=?,category=?,descript=? WHERE id=?"
    let data = [info.name, info.autor, info.category, info.descript, id];

    base(sql, data, result=>{
        if(result.affectedRows==1){
            res.json({flag: 1})
         }else{
            res.json({flag: 2})
         }
    })
}

exports.delet = (req, res) =>{
    let id = req.params.id;

    let sql = "delete from libsql where id=?"
    let data = [id];
    base(sql, data, result=>{
        if(result.affectedRows==1){
            res.json({flag: 1})
         }else{
            res.json({flag: 2})
         }
    })
}