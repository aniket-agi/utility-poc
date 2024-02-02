import fastify from "fastify";
import connectToMongoDB from "./config/mongodb";
import envSchema from "./config/env";
import categoryRoutes from './routes/category.route'
import itemRoutes from "./routes/item.route.";
const server = fastify();

// Validate env variables
server.register(envSchema);

// Connecting to the MongoDB database
server.register(connectToMongoDB);

//Routes setup
server.register(categoryRoutes);
server.register(itemRoutes);

server.get("/", async (request, reply) => {
  return reply.code(200).send("API for utility poc");
});

server.listen({ port: 8000 }, (err, address) => {
  if (err) {
    console.log(err);
  }
  console.log(`Server up at ${address}`);
});
