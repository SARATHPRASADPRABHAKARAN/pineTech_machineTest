const Signup=require('../model/usersModel')
const express=require('express')
const jwt= require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports = {

     dosignUp(userdata){
        return new Promise(async(resolve,reject)=>{

          
            console.log(userdata)  
            const encryptedPassword = await bcrypt.hash(userdata.password, 10);
            const signup=new Signup({
                fullName:userdata.fullName,
                email:userdata.email,
                password:encryptedPassword

             })

            const S1= await  signup.save()
            resolve({message:'Signup Successfull, Please Login Now.'})
        })
     },


     doLogin(userdata){
        return new Promise(async(resolve,reject)=>{
            let userExist= await  Signup.findOne({email:userdata.email})
            if(userExist){
                
                checkPwd= await  bcrypt.compare(userdata.password,userExist.password)

                if(checkPwd)
                {
                    const token = await jwt.sign(
                        { userId: userExist._id, },
                          process.env.JWT_SECRET,
                          {
                            expiresIn: "2h",
                          }
                        );
                        
                    resolve({status:200,message:"login successful",token:token,fullName:userExist.fullName})
                    
                }
                else
                {
                    resolve({status:400,message:" password is incorrect "})
                }

            }
            else
            {
                resolve({status:400,message:" incorrect username "})
            }
        })
     },


     allUsers(){
           return new Promise (async(resolve,reject)=>{
            const allData= await Signup.find()
            resolve(allData)
           })
     }
}