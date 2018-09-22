var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lib'
});

connection.connect();


let sql = "UPDATE libsql set name=?,autor=?,category=?,descript=? WHERE id=?"
let data =[
     "明朝那些事",
    '小白',
     "够事",
    "deescc",
    7
]

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows==1){
    console.log('更新一条数据');
  }
});

connection.end();