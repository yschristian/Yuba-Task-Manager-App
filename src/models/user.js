const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    name:{
        type : String,
        required: true,
        trim:true
         
    },
    email:{
        type : String,
        trim:true,
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
  }
})
 userSchema.pre('save',async function(next){
     const user = this 
     if(user.isModified('password')){
         user.password = await bcrypt.hash(use.password,8)
     }
    next()
 })
const User = mongoose.model('User',userSchema)


module.exports = User;