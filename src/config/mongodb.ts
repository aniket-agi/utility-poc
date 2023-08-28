import fastifyMongo from '@fastify/mongodb';

export default async function (fastify: any) {
 try {
  fastify.register(fastifyMongo, {
    url: process.env.DATABASE_URL
  });
  console.log("Connected to MONGODB")
 } catch (error) {
  console.log("Error connecting to mongodb",error)
 }
}
