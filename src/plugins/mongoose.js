import fp from "fastify-plugin";
import { mongoConnect } from "../connectors/mongoose.connector.js";

export default fp(async function mongoosePlugin() {
    mongoConnect()
      .then(() => {
        console.log("Mongoose connection has been established successfully.");
      })
      .catch((err) => {
        console.error("Unable to connect to the database:", err);
      });

});
