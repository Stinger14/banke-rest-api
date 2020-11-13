import Sequelize from 'sequelize';
// require('dotenv').config();

// conn string
//`postgres://process.env.DB_USER:process.env.DB_PASS@process.env.DB_HOST:process.env.DB_PORT/process.env.DB_DATABASE`

export const sequelize = new Sequelize(
  "postgres://postgres:Maxsteel2!@localhost:5432/banke", {
     host:"localhost",
     dialect:'postgres',
     pool:{
           max:5,
           min:0,
           idle:10000
     },
     logging: false
   });

// export const sequelize = new Sequelize(
//   "postgres://postgres:Maxsteel2!@localhost:5432/banke", {
//      host:"localhost",
//      dialect:'postgres',
//      pool:{
//            max:5,
//            min:0,
//            idle:10000
//      },
//      logging: false
//    });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("\n ==========> Conection via Sequelize successful. <===========\n");
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });