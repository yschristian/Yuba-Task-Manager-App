const express = require('express');
require('./db/mongoose');
const User = require('./models/user'); 
const Task = require('./models/task'); 

const app = express();
app.use(express.json())

app.post('/users',(req,res)=>{
     const user = new User(req.body)
        user.save().then(()=>{
        res.status(201).send(user);
    }).catch((e)=>{
        res.status(400).send(e);
    })
})
//tasks
app.post('/tasks',(req,res)=>{
    const task = new Task(req.body)
         task.save().then(()=>{
         res.status(201).send(task);
     }).catch((e)=>{
         res.status(400).send(e);
     })
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('server is on port'+port);
})