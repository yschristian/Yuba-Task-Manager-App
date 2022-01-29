const express = require('express');
const db =require('./db/mongoose');
const userRouter  = require('./routers/user');
const  taskerRouter = require('./routers/task');

db()
const app = express();
app.use(express.json())
app.use(userRouter)
app.use(taskerRouter)

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('server is on port'+port);
})

// const Task  = require('./models/task')
const User  = require('./models/user')
  const  main = async  ()=>{
//   const  task  = await Task.findById('61f3988d8c6e312f6f78118c').populate('owner',['name','email','age']).catch((err)=>[
//     console.log(err.message)
//   ])
//   //it  converts id into all profile of user
//  //find user associate  with task

//   console.log(task.owner)

const user = await User.findById('61f2b77bcb1a457a3c7cf9ee').populate('tasks',['description','completed','owner']).catch((err)=>[
  console.log(err.message)
])
console.log(user.tasks)
}
main()