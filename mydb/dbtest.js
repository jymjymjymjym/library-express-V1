const db = require("./db");

let sql = "select * from user"
let data ={
    name: "清朝那点事",
    autor: '老白',
    category: "破事",
    descript: "deesc"
}

db.base(sql,data,(result)=>{
    console.log(result)
});