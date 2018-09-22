var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lib'
});

connection.connect();


let sql = "INSERT INTO libsql set ?"
let data ={
    name: "明朝那点事",
    autor: '老白',
    category: "破事",
    descript: "deesc"
}

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows==1){
    console.log('插入一条数据');
  }
});

connection.end();