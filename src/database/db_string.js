const { Pool } = require("pg");

require("dotenv").config();

const isProduction = process.env.NODE_ENV === "production";

// const connString = `postgresql://postgres:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

// Create alternative connection string.
const pool = new Pool({
  connectionString: isProduction? process.env.DATABASE_URL : connectionString
});

console.log("\n ==========> Conection string successful. <===========\n")

module.exports = { pool };