const express = require('express');
require('./db/mongoose');
const userRouter  = require('./routers/user');
const  taskerRouter = require('./routers/task');

const app = express();
app.use(express.json())
app.use(userRouter)
app.use(taskerRouter)

const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('server is on port'+port);
})

const Task  = require('./models/task')
// const User  = require('./models/user')
  const  main = async  ()=>{
  const  task  = await Task.findById('61f3988d8c6e312f6f78118c')
  //it  converts id into all profile of user
 //find user associate  with task
  await task.populate('owner').execPopulate()
  console.log(task.owner)
}
main()