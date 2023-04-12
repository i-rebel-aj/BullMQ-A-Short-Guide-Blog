//Monitoring Service for our queue

import express from 'express'
const app=express()
import Arena from 'bull-arena';
import { Queue } from "bullmq";

const arenaConfig = Arena(
    {
        BullMQ: Queue,
        queues: [
            {
                name: 'myMessageQueue',
                type: 'bullmq',
                hostId: 'myMessageQueue',
                redis: {
                    host: 'localhost',
                    port: 6379
                }
            }
        ],
    },
    { disableListen: true }
);

app.use('/admin/queues', arenaConfig);

app.listen(5000, ()=>{
    console.log(`Bull arena server running at port ${5000}`)
})