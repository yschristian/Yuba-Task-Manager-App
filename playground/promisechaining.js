require('../src/db/mongoose');
const User =  require('../src/models/user');
//promise chaining
// User.findOneAndUpdate('61eb1fef9d81c3f2da1ec4b2',{ age:12 }).then((user)=>{
//     console.log(user)
//     return User.countDocuments({ age:12 })
// }).then((results)=>{
//     console.log(results)
// }).catch((e)=>{console.log(e);})

//asyc and wait
const updateAgeAndCount = async(id,age)=>{
    const user = await User.findByIdAndUpdate(id,{age})
    const count = await User.countDocuments({age})
    return count
}
updateAgeAndCount('61eb1fef9d81c3f2da1ec4b2',25).then((count)=>{
    console.log(count)
}).catch((e)=>{console.log(e);})