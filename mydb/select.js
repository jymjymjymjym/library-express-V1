var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lib'
});

connection.connect();


let sql = "select * from libsql where id=?"
let data =[8]

connection.query(sql, data, function (error, results, fields) {
  if (error) throw error;
    console.log(results);
});

connection.end();