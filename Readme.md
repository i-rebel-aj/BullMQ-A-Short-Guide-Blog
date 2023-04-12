## A Small Guide on Message Queue with Node.js and BullMQ

This is the repo for blog

The Code Conains 3 services, with ports hardcoded

The services are
- User Service
- Email Service
- Monitoring (Bull Arena) Service

Make sure you have Redis version > 6, running on your machine. 

The files `RedisClient.ts` and `MessageQueue.ts`  handle queue declaration and instantiate redis-client for your node app. (As an active redis client is required to add message to queue)

**To Run the code**

Install all dependencies
```
npm install
```

Run the services
```
npm run dev
```