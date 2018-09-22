const express = require('express');
const router = express.Router();
const rs = require('./routers.js');

router.get('/',rs.showindex);

//跳转到添加图书的页面
router.get('/toAdd',rs.toAdd);

//表单提交的路由
router.post('/addBook',rs.add)

//跳转到编辑页面
router.get('/toEditPage',rs.toEdit)

router.post('/edit',rs.edit)

router.get('/delet',rs.delet)

module.exports = router;