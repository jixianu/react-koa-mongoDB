import mongoose from 'mongoose'

let SkillSchema = new mongoose.Schema({
  skill: String,
  proficiency: String,
  serLife: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

SkillSchema.pre('save', function(next){
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  }
  else {
    this.meta.updateAt = Date.now()
  }
  next()
})

SkillSchema.statics = {
  getAll: function (cb) {
    return this
      .find({})
      .sort('updateAt')
      .exec(cb)
  },
  getOne: function (id, cb) {
    return this
      .findOne({_id: id})
      .exec(cb)
  },
  findByKey: function (key, cb) {
    return this
      .find({skill: new RegExp(key, 'i')})
      .sort('meta.updateAt')
      .exec(cb)
  },
  removeById: function (id, cb) {
    return this
      .findByIdAndRemove({_id: id})
      .exec(cb)
  },
  updateById: function (id, update, cb) {
    return this
      .findByIdAndUpdate({_id: id}, {$set: update})
      .exec(cb)
  }
}

export default SkillSchema