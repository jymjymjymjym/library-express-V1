/*******************
 * 操作数据库
 */
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'lib'
});

connection.connect();

connection.query('select count(*) as tot from libsql', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].tot);
});

connection.end(); 