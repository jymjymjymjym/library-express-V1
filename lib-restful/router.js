const express = require('express');
const router = express.Router();
const rs = require('./routers.js');

router.get('/books', rs.showindex);

//跳转到添加图书的页面

//表单提交的路由
router.post('/books/book', rs.add)

//跳转到编辑页面
router.get('/books/book/:id', rs.toEdit)

router.put('/books/book/', rs.edit)

router.delete('/books/book/:id', rs.delet)


module.exports = router;