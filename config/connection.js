const Pool = require("pg").Pool;

const config = new Pool({
  user: "postgres",
  host: "localhost",
  database: "reflections",
  password:"admin",
  port: 3333,
});
config.connect(err => {
    if (err) {
        console.log(err.message)
    } else {
        console.log("connected")
    }
})

module.exports = config;