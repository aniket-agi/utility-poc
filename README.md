# ZED Fastify Boilerplate

This is a Fastify application dockerized for easy deployment and development. It uses a locally installed mongodb instance for database operations through mongoose ORM.

## Prerequisites

- Docker installed on your machine.
- A Mongodb instance running locally.
- A configured `.env` file with your mongodb connection string.

## Instructions

1. **Set up your environment variables**. This application uses mongoose as an ORM, which requires connection details to the mongodb database. You must provide these details through an environment variable. The application expects to find a `.env` file at the root of the project with the following contents:

   ```dotenv
   DATABASE_URL="mongodb://<username>:<password>@host.docker.internal:5432/<database_name>"
   ```

   Replace `<username>`, `<password>`, and `<database_name>` with your actual mongodb username, password, and database name.

2. **Build the Docker image** from the Dockerfile included in the repository:

   ```bash
   docker build -t my-fastify-app .
   ```

3. **Run the Docker container**. At this point, the application should be running and can be accessed at `http://localhost:8080`.

   ```bash
   docker run -p 8080:8080 my-fastify-app
   ```

4. **To stop the application**, find the container ID with the following command:

   ```bash
   docker ps
   ```

   Then stop the container with:

   ```bash
   docker stop <container-id>
   ```

**Note:** Replace `my-fastify-app` with whatever name you want to give your Docker image. Also, `<container-id>` should be replaced with the ID of your running Docker container.
