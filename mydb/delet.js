var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lib'
});

connection.connect();


let sql = "delete from libsql where id=?"
let data =[8]

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows==1){
    console.log('删除一条数据');
  }
});

connection.end();