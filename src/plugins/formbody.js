import fp from "fastify-plugin";
export default fp(async (fastify) => {
  await fastify.register(await import("@fastify/formbody"));
});
