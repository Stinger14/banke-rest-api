import Sequelize from 'sequelize';
// require('dotenv').config();

export const sequelize = new Sequelize("postgres://qunmnvmiikmgpl:79b5b6db5f7df3339671f655ae376ed1d051f20be449c8d4393e970da40dff45@ec2-54-161-150-170.compute-1.amazonaws.com:5432/dbuqa2i2eldd6j");


// Sequelize orm init. (Default connection)
// export const sequelize = new Sequelize(
//     process.env.DB_DATABASE,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host: process.env.DB_HOST,
//         dialect: 'postgres',
//         pool: {
//             max: 5,
//             min: 0,
//             require: 30000,
//             idle: 10000
//         },
//         logging: false
//     }
// )

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("\n ==========> Conection via Sequelize successful. <===========\n");
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });