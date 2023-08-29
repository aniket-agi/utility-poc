import Fastify from "fastify";
import autoLoad from "@fastify/autoload";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import fastifyEnv from "@fastify/env";
const fastify = Fastify({ logger: true });

const schema = {
  type: "object",
};

const options = {
  confKey: "config",
  schema,
  dotenv: true,
  data: process.env,
};

fastify.register(fastifyEnv, options);
await fastify.after();

fastify.register(autoLoad, {
  dir: path.join(__dirname, "plugins"),
});

fastify.register(autoLoad, {
  dir: path.join(__dirname, "routes"),
});

fastify.ready(async (err) => {
  if (err) throw console.log("swagger - err", err);
  fastify.swagger();
});

const start = async () => {
  try {
    await fastify.listen({ port: parseInt(process.env.FASTIFY_PORT) });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();

export { fastify };
