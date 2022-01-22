const express = require('express');
require('./db/mongoose');
const User = require('./models/user'); 
const Task = require('./models/task'); 

const app = express();
app.use(express.json())


//creating
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

//reading
app.get('/users',(req,res)=>{
      User.find({}).then((users)=>{
          res.send(users);
      }).catch((e)=>{
          res.status(500).send(e);
        })
})
app.get('/users/:id',(req,res)=>{
    const _id = req.params.id;
    User.findById(_id).then((user)=>{
           if(!user){
               res.status(404).send()
           }
           res.send(user);
    }).catch((e)=>{
         res.status(500).send()
    })
})
app.get('/tasks',(req,res)=>{
    Task.find({}).then((tasks)=>{
        res.send(tasks);
    }).catch((e)=>{
       res.status(500).send(e);
    })
})
app.get("/tasks/:id",(req,res)=>{
    const _id = req.params.id;
    Task.findById(_id).then((task)=>{
          if(!task){
              res.status(500).send();
          }
          res.status(201).send(task);
    }).catch((e)=>{
          res.status(500).send();
    })
})
const port = process.env.PORT || 3000;
app.listen(port,()=>{
  console.log('server is on port'+port);
})