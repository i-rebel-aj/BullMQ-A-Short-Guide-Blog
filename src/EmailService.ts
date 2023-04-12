import express from 'express'
import { Job, Worker } from 'bullmq'
const app=express()
app.use(express.json({limit: '3mb'}));

const worker = new Worker('myMessageQueue', async(job: Job)=>{
    //Use Job Data To Send Email
    console.log('Job Data is', job.data)
    YourMethodOfSendingEmail(job.data)
    return 'Success'
})

function YourMethodOfSendingEmail(data: any){
    console.log('I Was called')
    //The Code Of Sending Email Goes Here
}

/*
    Simple express route containing code of Microservice B(Email Service), 
    the client calls POST /send-email method which sends email based on
    the provided data.
    
    This can be if HTTP request to send-email is not required by the buisiness logic.
*/

app.post("/send-email", async (req, res)=>{
    try{
      YourMethodOfSendingEmail(req.body)
      return res.send('Email Sent')
    }catch(err){
        return res.send('Error Occured while calling email service')
    }
})
app.listen(3000, ()=>{
    console.log(`Email Service Started at port 3000`)
})