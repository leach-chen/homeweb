// 导入MySql模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var userSQL = require('../db/Usersql');
var express = require('express');
var router = express.Router();


// 使用DBConfig.js的配置信息创建一个MySql链接池
var pool = mysql.createPool( dbConfig.mysql );
// 响应一个JSON数据
var responseJSON = function (res, ret) {
    if (typeof ret === 'undefined') {
      res.json({
          code: '-200',
          msg: '操作失败'
      });
    } else {
      res.json(ret);
    }
};
// 添加用户
router.get('/addUser',function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        // 建立连接 添加一个用户信息
        connection.query(userSQL.insert, [param.uid,param.name], function (err, result) {
            if(result) {
              result = {
                code: 200,
                msg: '添加成功'
              };
            }

            // 以json形式，把操作结果返回给前台页面
            responseJSON(res, result);

            // 释放链接
            connection.release();

        });
    });
});
// 用户登录
router.get('/login',function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var UserName = param.uid;
        var Password = param.name;
        var _res = res;
        connection.query(userSQL.queryAll, function (err, res, result) {
            var isTrue = false;
            if(res){ //获取用户列表，循环遍历判断当前用户是否存在
                for (var i=0;i<res.length;i++) {
                    if(res[i].uid == UserName && res[i].userName == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isLogin = isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isTrue) {
                data.userInfo = {};
                data.userInfo.uid = UserName;
                data.userInfo.userName = Password;
            } //登录成功返回用户信息
            if(result) {
                result = {
                    code: 200,
                    msg: 'succeed'
                };
                data.result = result;
            }
            if(err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            responseJSON(_res, data);

            // 释放链接
            connection.release();

        });
    });
});
// 用户注册
router.get('/reg',function (req, res, next) {
    // 从连接池获取连接
    pool.getConnection(function (err, connection) {
        // 获取前台页面传过来的参数
        var param = req.query || req.params;
        var UserName = param.uid;
        var Password = param.name;
        var _res = res;
        connection.query(userSQL.queryAll, function (err, res) {
            var isTrue = false;
            if(res){ //获取用户列表，循环遍历判断当前用户是否存在
                for (var i=0;i<res.length;i++) {
                    if(res[i].uid == UserName && res[i].userName == Password) {
                        isTrue = true;
                    }
                }
            }
            var data = {};
            data.isreg = !isTrue; //如果isTrue布尔值为true则登陆成功 有false则失败
            if(isTrue) {
                data.result = {
                    code: 1,
                    msg: '用户已存在'
                };//登录成功返回用户信息
            } else {
                connection.query(userSQL.insert, [param.uid,param.name], function (err, result) {
                    if(result) {
                        data.result = {
                            code: 200,
                            msg: '注册成功'
                        };
                    } else {
                        data.result = {
                            code: -1,
                            msg: '注册失败'
                        };
                    }
                });
            }

            if(err) data.err = err;
            // 以json形式，把操作结果返回给前台页面
            setTimeout(function () {
                responseJSON(_res, data)
            },300);
            // responseJSON(_res, data);
            // 释放链接
            connection.release();

        });
    });
});
// 删除用户
// router.get('/delUser',function (req, res, next) {
//     var _res = res;
//     pool.getConnection(function (err, connection) {
//         var param = req.query || req.params;
//         connection.query(userSQL.delete, [param.uid], function (err, result, res) {
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '刪除成功'
//                 };
//             }
//             responseJSON(_res, result);
//             connection.release();
//         })
//     })
// });
// 更新用户
// router.get('/updateUser',function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         var param = req.query || req.params;
//         connection.query(userSQL.update, [param.uid,param.name], function (err, result) {
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '修改成功'
//                 };
//             }
//             responseJSON(res, result);
//             connection.release();
//         });
//     });
// });
// 删除用户表
// router.get('/dropUser',function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         // var param = req.query || req.params;
//         connection.query(userSQL.drop, function (err, result) {
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '清除成功'
//                 };
//             }
//             responseJSON(res, result);
//             connection.release();
//         });
//     });
// });
// 查询用户表
// router.get('/queryAllUser',function (req, res, next) {
//     var _res = res;
//     pool.getConnection(function (err, connection) {
//         connection.query(userSQL.queryAll, function (err, result, res) {
//             console.log(res);
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '查询成功'
//                 };
//             }
//             responseJSON(_res, result);
//             connection.release();
//         });
//     });
// });
// 查询用户
// router.get('/getUserByIdUser',function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         var param = req.query || req.params;
//         connection.query(userSQL.getUserById, [param.name], function (err, result) {
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '查询成功'
//                 };
//             }
//             responseJSON(res, result);
//             connection.release();
//         });
//     });
// });
// 模糊查询
// router.get('/getUsers',function (req, res, next) {
//     pool.getConnection(function (err, connection) {
//         var param = req.query || req.params;
//         connection.query(userSQL.getUsers, [param.uid], function (err, result) {
//             if(result) {
//                 result = {
//                     code: 200,
//                     msg: '查询成功'
//                 };
//             }
//             responseJSON(res, result);
//             connection.release();
//         });
//     });
// });
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('in users page');
});

module.exports = router;
