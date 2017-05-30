import koa from 'koa'
import koaRouter from 'koa-router'
import parse from 'co-body'
import mongoose from 'mongoose'

import * as Skill from './controllers/skillCtrl'

const app = new koa()
const router = new koaRouter()

const config = {
  port: 3000,
  dbHost: 'localhost',
  dbPort: '27017',
  dbBaseName: 'koa'
}

mongoose.Promise = Promise
// 连接数据库
mongoose.connect('mongodb://' + config.dbHost + ':' + config.dbPort + '/' + config.dbBaseName)

/*Skill.findById('59279d9203c5097fecfa838f',function (err, skill) {
 console.log( '找到的是' + skill )
 })

 Skill.updateById('59279d9203c5097fecfa838f', {skill: 'xiaomeng'}, function (err, skill) {
 console.log( '更新的是' + skill )
 })

 Skill.removeById('59279d9203c5097fecfa838f', function (err, skill) {
 console.log( '删除的是' + skill )
 })
 */

router
  .get('/api/', function *(next) {
    try {
      this.body = yield Skill.getAll()
    } catch (e) {
      console.log(e)
    }
  })
  .get('/api/:key', function *(next) {
    const _key = this.params.key
    try {
      this.body = yield Skill.search(_key)
    } catch (e) {
      console.log(e)
      this.body = null
    }
  })
  .del('/api/:id', function *(next) {
    const _id = this.params.id
    try {
      yield Skill.remove(_id)
      this.body = true
    } catch (e) {
      console.log(e)
      this.body = null
    }
  })
  .post('/api/update', function *(next) {
    const _body = yield parse.json(this)
    console.log(_body);
    try {
      const isSaved = yield Skill.getOne(_body._id)
      if (isSaved) {
        yield Skill.update(_body._id, _body)
        this.body = true
      } else {
        this.body = null
      }
    } catch (e) {
      console.log(e)
      this.body = null
    }
  })
  .post('/api/save', function *(next) {
    const _body = yield parse.json(this)
    console.log(_body);
    try {
      Skill.save(_body)
      this.body = true
    } catch (e) {
      console.log(e)
      this.body = null
    }
  })

// 开始服务并生成路由
app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(config.port, () =>
    console.log('server is running on port ' + config.port)
  )
