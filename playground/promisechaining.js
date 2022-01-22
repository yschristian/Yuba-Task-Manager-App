require('../src/db/mongoose');
const User =  require('../src/models/user');

User.findOneAndUpdate('61eb1fef9d81c3f2da1ec4b2',{ age:12 }).then((user)=>{
    console.log(user)
    return User.countDocuments({ age:12 })
}).then((results)=>{
    console.log(results)
}).catch((e)=>{console.log(e);})