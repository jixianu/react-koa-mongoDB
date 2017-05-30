import mongoose from 'mongoose'
import SkillSchema from '../schemas/skillSchemas'
const SkillModel = mongoose.model('Skill', SkillSchema)


/*var newSkill1 = new Skill({
 skill: 'cnb',
 proficiency: 'nb',
 serLife: 10,
 updateAt: Date.now()
 })
 var newSkill2 = new Skill({
 skill: 'cnb2',
 proficiency: 'nb2',
 serLife: 20,
 updateAt: Date.now()
 })
 newSkill1.save();
 newSkill2.save();*/

export default SkillModel
