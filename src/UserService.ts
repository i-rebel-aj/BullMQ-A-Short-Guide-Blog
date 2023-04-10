import express from 'express'
import axios from 'axios'
const app=express()
import './MessageQueues'

/*
Simple express route containing code of Microservice A (User Service), 
the client calls POST /register method which registers the client. 
*/

app.post("/", async (req, res)=>{
    try{
      //Code That Registers the user in DB
      //Code That sends subsequent request to Microservice B 
      await axios.post("http://localhost:3000/send-email", {data: req.body})
      return res.send('User Signed Up Successfully')
    }catch(err){
      //Error Handling Code
      return res.send('User Service Threw Error')
    }
})
app.listen(4000, ()=>{
    console.log(`User Service Started At Post 4000`)
})