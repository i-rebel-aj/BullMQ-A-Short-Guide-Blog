import express from 'express'
import axios from 'axios'
const app=express()
import {myMessageQueue} from './MessageQueues'

/*
Simple express route containing code of Microservice A (User Service), 
the client calls POST /register method which registers the client. 
*/
app.use(express.json({limit: '3mb'}));

app.post("/", async (req, res)=>{
    try{
      //Code That Registers the user in DB
      //Code That sends subsequent request to Microservice B 
      //Old Axios Code
      //await axios.post("http://localhost:3000/send-email", {data: req.body})
      await myMessageQueue.add('Send Email Job', {...req.body})
      return res.send('User Signed Up Successfully')
    }catch(err){
      //Error Handling Code
      return res.send('User Service Threw Error')
    }
})
app.listen(4000, ()=>{
    console.log(`User Service Started At Post 4000`)
})