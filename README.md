做的一个ToDoList，这个是一个整体前后端框架的测试

- 前端: react + react-router + redux + antd
- 后端: node + koa
- 数据: mongo +  mongoose
- 构建工具: npm + webpack

##运行


- 安装依赖

    `npm install`
    
- 运行数据库

    `mongod --dbpath c:\data\koa`

- 运行服务器

    `npm run server`

- 运行前端

    `npm start`


##mongoose
Schema 是定义数据模型，数据操作方法，继承方法

    var mongoose = require('mongoose')
    var UserSchema = new mongoose.Schema({...数据模型})
    UserSchema.pre('save, function(next){...预操作;next()})
    UserSchema.statics()

Model 是生成聚集集合，继承Schema方法

    var mongoose = require('mongoose')
    var UserSchema = require('../schemas/user')
    var User = mongoose.model('User', UserSchema)
    module.exports = User

Controll 是暴露的操作具体接口方法

    var User = mongoose.model('User')
    // User有静态方法，根据模板新生成的数据对象user，
    var _user = req.body.user
    user = new User(_user)

版本
    node v6.10.3
    npm v3.10.10



                             
       工具 utils 对请求的封装   ---------> 处理函数   action redux数据行为封装  获取数据后通过action属性给到reducer，然后 ----------------> reducer返回新的数据，给state，然后connect后，在属性中拿到数据
     


mongodb
多表查询   