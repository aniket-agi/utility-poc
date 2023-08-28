import fastify from 'fastify';
import connectToMongoDB from './config/mongodb';
import envSchema from './config/env';

const server = fastify();

    // Validate env variables
    server.register(envSchema);

    // Connecting to the MongoDB database
    server.register(connectToMongoDB);

    server.get('/', async (request, reply) => {
      console.log("HERE IN GET")
      return 'Hello there from aniket! 👋';
    });

    server.listen({port:8000},(err,address)=>{
      if(err){
        console.log(err)
      }
      console.log(`Server up at ${address}`)
    });
