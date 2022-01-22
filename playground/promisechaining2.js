require('../src/db/mongoose');
const Task = require('../src/models/task');

Task.findByIdAndRemove('61eb29c698b3aa53c6c45653').then((task)=>{
    console.log(task);
    return Task.countDocuments({ completed:false })
}).then((results)=>{
    console.log(results);
}).catch((e)=>{console.log(e);})

//promise chaining
//to do something after something