const Pool = require("pg").Pool;

const config = new Pool({
  user: "postgres",
  host: "localhost",
  database: "finalproject1",
  password:"1911andre",
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