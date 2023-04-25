require("dotenv").config()
const Pool = require("pg").Pool;

const config = new Pool({
  user: process.env.DB_USERNAME,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password:process.env.DB_PASSWORD,
  port: 5432,
});
config.connect(err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("connected")
    }
})

module.exports = config;