import { getSampleByIdController } from "../controllers/sample.controller.js";

export default async function (fastify, opts) {
  fastify.get("/:id", opts, (req, res) => {
    getSampleByIdController(req, res);
  });
}
