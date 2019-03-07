var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

/* 导入mysql模块 */
var mysql = require('mysql');
var dbconfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
var pool = mysql.createPool(dbconfig.mysql);     // 使用DBConfig.js的配置信息创建一个MySQL连接池
