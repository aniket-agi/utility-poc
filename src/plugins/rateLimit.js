import fp from "fastify-plugin";
export default fp(async (fastify) => {
  await fastify.register(await import("@fastify/rate-limit"), {
    global: true,
    max: parseInt(process.env.MAX_RATE_LIMIT),
    timeWindow: "1 minute",
  });
});
