const mongoose=require('mongoose')
const usersSchema=new mongoose.Schema({


    fullName:{
              type:String,
              required:true
             },
    email:{
             type:String,
             required:true
          }  ,
    
    password:{
            type:String,
            required:true
          }           
})
module.exports = mongoose.model('users',usersSchema)