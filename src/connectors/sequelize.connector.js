import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  pool: {
    max: parseInt(process.env.MAX_POOL_CONNECTION),
    min: parseInt(process.env.MIN_POOL_CONNECTION),
    acquire: parseInt(process.env.MAX_POOL_ACQUIRE),
    idle: parseInt(process.env.MAX_POOL_IDLE),
  },
});

export { sequelize };
