

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