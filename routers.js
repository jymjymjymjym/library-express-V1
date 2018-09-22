/**************
 * 业务模块
 * *************/
const data = require('./data.json');
const fs = require('fs');
const path = require('path');
const base = require('./mydb/db').base;

let maxID = (w)=>{
    let arr = [];
    w.forEach(item => {
        arr.push(item.id);
    });
    return Math.max(...arr);    //相当于 Math.max.apply(null, arr)
}

function write(res){
    fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
        if(err){                                  //该方法会把所有的空格都去掉，保留格式方法为.stringify(data, null, 4)
            res.send('serr err')
        }else{
            // 上传文件成功，重定向到首页
            res.redirect('/')
        }
    });
}

exports.showindex = (req, res)=>{
    let sql = "select * from libsql"
    base(sql, null, (result)=>{
        res.render(__dirname+'/views/index.art',{
            arr: result
        })
    })
    
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
    let info = req.body
    let sql = `insert into libsql set ?`;
    let data = {
        name: info.name,
        autor: info.autor,
        category: info.category,
        descript: info.desc
    }
    base(sql, data, (result)=>{
        if(results.affectedRows==1){
           res.redirect('/');
        }
    })
}

exports.toEdit = (req, res)=>{
    let id = req.query.id;
    let sql = 'select * from libsql where id=?'
    let data = [id]
    base(sql, data, (result)=>{
        res.render(__dirname+'/views/editpage.art', result[0]);
    })
}

exports.edit = (req, res)=>{
    let id = req.query.id;
    let info = req.body;
    console.log(id+"-"+info.name);

    let sql = "UPDATE libsql set name=?,autor=?,category=?,descript=? WHERE id=?"
    let data = [info.name, info.autor, info.category, info.descript, id];

    base(sql, data, result=>{
        if(result.affectedRows==1){
            res.redirect('/');
        }
    })
}

exports.delet = (req, res) =>{
    let id = req.query.ID;
    console.log(id)
    let sql = "delete from libsql where id=?"
    let data = [id];
    base(sql, data, result=>{
        if(result.affectedRows==1){
            res.redirect('/');
        }
    })
}