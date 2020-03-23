
const mongoose = require('./db')
//创建用户集合
const Schema = mongoose.Schema;

//创建数据库中的集合的相关字段以及数据类型

const schema = new Schema({
    userid:{ type: String},
    tel:{type: String},
    password:{type:String}
})

//生成集合--- 数据库中会自动生成users的数据集合
module.exports = mongoose.model('User',schema)