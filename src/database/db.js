import Sequelize from 'sequelize';
// const { Pool } = require("pg");

require('dotenv').config();

const isProduction = process.env.NODE_ENV === "production";

// const connString = `postgresql://${process.env.DB_USERNAME}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// const pool = new Pool({
//   connString: isProduction? process.env.DATABASE_URL : connString
// });

// module.exports = { pool };

export const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        logging: false
    }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });