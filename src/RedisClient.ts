import Redis from "ioredis"

//Hadrcoding Redis port, you can also use .env files
const redisConfig={
    host: 'localhost',
    port: 6379
}
// getting redis connection
console.log('Redis Config', redisConfig.host, redisConfig.port);

const clientConnection = new Redis({
    ...redisConfig,
    maxRetriesPerRequest:null,
    enableReadyCheck:false
});

clientConnection.on("connect", () => {
    console.log(`Connected to redis`);
});

clientConnection.on("error", (err) => {
    console.log(`Error in Redis connection ${err}`);
});

clientConnection.on("end", () => {
    console.log("Client disconnected from redis");
});

export default clientConnection