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
const jwt = require("jsonwebtoken");
const myFunc = async()=>{
  const token  = jwt.sign({_id:'abcd3323'},'thatisnode' )
  console.log(token);
}
myFunc()