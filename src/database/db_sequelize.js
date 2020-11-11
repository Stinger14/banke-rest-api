import Sequelize from 'sequelize';
require('dotenv').config();

// export const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`);

// Sequelize orm init. (Default connection)
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
    console.log("\n ==========> Conection via Sequelize successful. <===========\n");
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });