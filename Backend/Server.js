const { json } = require('express')
const express= require('express')
const app=express()
const userRoutes=require('./route/index')
const mongoose=require('mongoose')
const Url='mongodb://localhost/authdb'
const port=process.env.PORT||7000
const cors =require('cors')
mongoose.connect(Url,{useNewUrlParser:true});

app.use(cors())

app.use(json())

app.use('/',userRoutes)
require("dotenv").config();

const con= mongoose.connection
con.on('open',function(){
    console.log("mongoose connected")
})



app.listen(port,err=>{
    if(err){
        console.log('err',err)
    }
    console.log(`listening on port ${port}`)
})