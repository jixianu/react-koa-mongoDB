// 增删改查只是基本操作，在这添加复杂的逻辑操作(本demo没有)
import mongoose from 'mongoose'
import '../models/skillModel'
const Skill = mongoose.model('Skill')

export function save(newSkill) {
  const skill = new Skill(newSkill)
  skill.save(err=> {
    if (err) {
      console.log(err)
    }
    console.log('已保存')
  })
}

export function getAll() {
  return Skill.getAll((err, skill)=> {
    if (err) {
      console.log(err)
    }
    console.log(skill)
  })
}

export function getOne(id) {
  return Skill.getOne(id, (err, skill)=> {
    if (err) {
      console.log(err)
    }
    console.log(skill)
  })
}

export function update(id, update) {
  return Skill.updateById(id, update, (err, skill)=> {
    if (err) {
      console.log(err)
    }
    console.log(skill)
  })
}

export function remove(id) {
  return Skill.removeById(id, (err, skill)=> {
    if (err) {
      console.log(err)
    }
    console.log(skill)
  })
}

export function search(key) {
  return Skill.findByKey(key, (err, skill)=> {
    if (err) {
      console.log(err)
    }
    console.log(skill)
  })
}
