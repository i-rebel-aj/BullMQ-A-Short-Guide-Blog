import express from 'express'
const app=express()


function YourMethodOfSendingEmail(data: any){
    //The Code Of Sending Email Goes Here
}

/*
    Simple express route containing code of Microservice B(Email Service), 
    the client calls POST /send-email method which sends email based on
    the provided data. 
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