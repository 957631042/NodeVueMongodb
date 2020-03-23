var express = require('express');
var router = express.Router();
var sql = require('./../sql');//数据库操作
var User = require('./../sql/users');//用户数据库集合
var uuid = require('node-uuid') //生成唯一值

/* 用户登录、注册等接口 */

/**
 * @api {post} api/users/login 登陆接口
 * @apiDescription 登陆接口
 * @apiGroup users
 * @apiParam { string } tel 手机号码
 * @apiParam { string } password 密码
 * @apiSuccessExample { json } Success-response:
 *  res.send({
      code: '100', // 随你喜欢自己设置
      message: '请先完善您的信息'
    })
 *  res.send({
      code: '106', // 随你喜欢自己设置
      message: '登陆成功'
    })
    res.send({
        code: '102',
        message: '用户还未注册'
      })
    res.send({
            code: '101',
            message: '密码错误'
          })
 * @apiSampleRequest /api/users/login
 * @apiVersion 1.0.0
 */
router.post('/login', function(req, res, next) {
  let { tel, password } = req.body
  // *************判断用户有没有输入*********************
  if (!tel || !password) {
    res.send({
      code: '100', // 随你喜欢自己设置
      message: '请先完善您的信息'
    })
    return
  }
  // **********************************
  // 2. 根据数据库判断当前的用户存在不存在，如果不存在，显示未注册，如果存在，进一步验证密码的正确性，正确表示登陆成功，错误错误，显示密码错误
  sql.find(User, { tel }, { _id: 0 }).then(data1 => {
    if (data1.length === 0) {
      res.send({
        code: '102',
        message: '用户还未注册'
      })
    } else {
      sql.find(User, { tel, password }, { _id: 0 }).then(data => {
        if (data.length === 0) {
          res.send({
            code: '101',
            message: '密码错误'
          })
        } else {
          res.send({
            code: '106',
            message: '登陆成功'
          })
        }
      })
    }
  })
});
// 编写接口文档  cnpm i apidoc -g  配置生成接口文档的规则 package.json   apidoc -i api/ -o public/apidoc
/**
 * @api {post} api/users/register 注册接口
 * @apiDescription 注册接口
 * @apiGroup users
 * @apiParam { string } tel 手机号码
 * @apiParam { string } password 密码
 * @apiSuccessExample { json } Success-response:
 *  res.send({
      code: '100', // 随你喜欢自己设置
      message: '请先完善您的信息'
    })
 *  res.send({
      code: '101', // 随你喜欢自己设置
      message: '注册成功'
    })
    res.send({
      code: '102', // 随你喜欢自己设置
      message: '该用户已注册'
    })
 * @apiSampleRequest /api/users/register
 * @apiVersion 1.0.0
 */
router.post('/register',function(req,res,next){
  let {tel,password} = req.body

  if(!tel || !password){
    res.send({
      code:'100',
      message:'请完善信息'
    })
    return
  }
  sql.find(User,{tel},{_id:0}).then(data=>{
    if(data.length === 0) {
      sql.insert(User,{
        userid:uuid.v1(),
        tel,
        password
      }).then(()=>{
        res.send({
          code:'101',
          message:'注册成功'
        })
      })
    }else{
      res.send({
        code:'102',
        message:'该用户已注册'
      })
    }
  })
})
module.exports = router;
