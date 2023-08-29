import fp from "fastify-plugin";
import { someSupport } from "../utils/sample.utils.js";

// the use of fastify-plugin is required to be able
// to export the decorators to the outer scope

export default fp(async function (fastify) {
  fastify.decorate("someSupport", someSupport);
});
