
var mongoose = require('mongoose');    //引用mongoose模块
// var db = mongoose.createConnection('localhost','koa'); //创建一个数据库连接
mongoose.connect('mongodb://localhost:27017/koa');

var PersonSchema = new mongoose.Schema({
  name:String   //定义一个属性name，类型为String
});
//为Schema模型追加speak方法
PersonSchema.methods.speak = function(){
  console.log(' save 我的名字叫' + this.name);
}

var PersonModel = mongoose.model('Person',PersonSchema);
//如果该Model已经发布，则可以直接通过名字索引到，如下：

PersonModel.find(function(err,persons){
  //查询到的所有person
  console.log( persons );
});

var personEntity = new PersonModel({name:'Krouky1111'});
//打印这个实体的名字看看
console.log(personEntity.name); //Krouky

personEntity.speak();//我的名字叫Krouky

personEntity.save();  //执行完成后，数据库就有该数据了

