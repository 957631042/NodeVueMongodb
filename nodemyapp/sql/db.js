//用来连接数据库 npm i --save mongoose
const mongoose = require('mongoose')

//连接数据库
mongoose.connect('mongodb://localhost:8888/myapp')

//监听数据库连接成功
mongoose.connection.on('connect',()=>{
    console.log("数据库连接成功")
})

//监听数据库连接断开
mongoose.connection.on('disconnected',()=>{
    console.log('数据库连接断开')
})

//监听数据库连接失败

mongoose.connection.on('error',()=>{
    console.log('数据库连接失败')
})

module.exports = mongoose;