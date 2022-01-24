require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndRemove('61eb29c698b3aa53c6c45653').then((task)=>{
//     console.log(task);
//     return Task.countDocuments({ completed:false })
// }).then((results)=>{
//     console.log(results);
// }).catch((e)=>{console.log(e);})

//promise chaining
//to do something after something

const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:true})
    return count;
}
deleteTaskAndCount('61eb29c698b3aa53c6c45653').then((count)=>{
    console.log(count);
}).catch((e)=>{console.log(e);})