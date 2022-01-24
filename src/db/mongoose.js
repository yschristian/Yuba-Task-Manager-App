const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://chris:chris@cluster0.k1npp.mongodb.net/task-manager?',{
    useNewUrlParser:true, 
})
// const task =new Task({
//     description:"hey man it's me study node js",
// })
// task.save().then(()=>{
//      console.log(task)
// }).catch((err)=>{
//     console.log('error',err)
// })