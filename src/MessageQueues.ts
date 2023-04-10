import { Queue } from "bullmq";
import redis from "./RedisClient"


export const myMessageQueue=new Queue('myMessageQueue', {
    connection:redis.duplicate(),
})