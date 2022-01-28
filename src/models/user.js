const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const Task = require('./task')
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
        trim:true
         
    },
    email:{
        type : String,
        trim:true,
        unique:true,
        lowercase:true,
        required: true,
        validate(value){
             if(!validator.isEmail(value)){
                 throw new Error('invalid email')
             }
        }
    },
    age:{
        type : Number,
        default:0,
        validate(value){
            if(value<0){
               throw new Error('Age must be positive');

            }
        }
    },
    password:{
        type:String,
        minlength:7,
        trim: true,
        required: true,
        validate(value){
           if(value.toLowerCase().includes('password')){
               throw new Error('can not contain "password"')
           }
       }
  },
  //when we want to know if  user still logged in
    tokens:[{
         token:{
            type:String,
            required: true
         }
    }] 
},{
  timeStamps:true,
})
//virtual property is not  data stored in datbase
//relatioship btn two entities
userSchema.virtual("tasks",{
     ref:"Task",
     localField:'_id',
     foreignField:'owner'
})

//deleting unnecesary
userSchema.methods.toJSON = function(){
    const user  = this
    const userObject = user.toObject()
    delete userObject.password
    delete userObject.tokens

    return userObject
}
userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id.toString()},'thatisnode')
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async(email,password)=>{
    const user = await User.findOne({email})
    if(!user){
        throw new Error('unable to login')
    }
    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('unable to login')
    }
    return user
}

//hashing password before saving
 userSchema.pre('save',async function(next){
     const user = this 
     if(user.isModified('password')){
         user.password = await bcrypt.hash(user.password,8)
     }
    next()
 })
//Delete user tasks whe user removed
userSchema.pre('remove',async function(next){
     const user= this
     await Task.deleteMany({owner:user._id})
    next()
})
const User = mongoose.model('User',userSchema)


module.exports = User;