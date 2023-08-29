import fp from "fastify-plugin";

export default fp(async function (fastify) {
  await fastify.register(await import("@fastify/swagger"), {});
  await fastify.register(await import("@fastify/swagger-ui"), {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Zed Microservice",
        description: "Fastify Boilerplate for ZED Microservice",
        version: "0.1.0",
      },
      host: "localhost:" + process.env.SWAGGER_PORT,
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
    exposeRoute: true,
  });
});
