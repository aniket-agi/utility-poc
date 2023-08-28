import fastifyEnv from "@fastify/env";

const envSchema = {
    schema: {
        type: 'object',
        required: ['DATABASE_URL', 'PORT'],
        properties: {
          DATABASE_URL: { type: 'string' },
          PORT: { type: 'string' },
        }
      },
      dotenv: true
}

export default async function (fastify: any) {
     fastify.register(fastifyEnv,envSchema).ready((err:any)=>{
        if(err) {
            console.log(err)
        }
        console.log("env variables validated")
     });
   }
   