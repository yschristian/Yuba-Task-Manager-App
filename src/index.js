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