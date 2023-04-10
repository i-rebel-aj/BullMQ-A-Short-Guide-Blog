import express from 'express'
const app=express()
import Arena from 'bull-arena';
import { Queue } from "bullmq";
const defaultHostConfig = {
    type: "bullmq",
    redis: {
        host: 'localhost',
        port: 6379
    }
};
const queueList=[
    {
        name: 'myMessageQueue',
        hostId: 'myMessgaeQueue'
    },
]
const arenaConfig = Arena(
    {
        BullMQ: Queue,
        queues: queueList.map((q) => ({
            name: q.name,
            hostId: q.hostId ? q.hostId : q.name,
            ...defaultHostConfig,
        })),
    },
    { disableListen: true }
);

app.use('/admin/queues', arenaConfig);

app.listen(5000, ()=>{
    console.log(`Bull arena server running at port ${5000}`)
})