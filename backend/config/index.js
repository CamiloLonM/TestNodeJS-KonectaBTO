import dotenv from 'dotenv';

dotenv.config();

export default {
  port: process.env.PORT || 8090,
  database: {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    port: process.env.DATABASE_PORT,
  },
};
