const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, '../', 'data.json'), 'utf-8', (err,data)=>{
    if(err) return;
    let arr = JSON.parse(data),
    list = [];
    arr.forEach(item=>{
        let sql = `INSERT INTO libsql (name,autor, category,descript) VALUES ('${item.name}','${item.autor}','${item.category}','${item.desc}');`
        list.push(sql);
    });
    fs.writeFile(path.join(__dirname, '../', 'sql.txt'), list.join(''),'utf-8', (err)=>{

    })
})