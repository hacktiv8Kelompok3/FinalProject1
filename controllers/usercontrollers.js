const db = require('../config/connection')
const { comparePassword,hashPassword } = require("../helpers/bcrypt")
const { generateToken } = require("../helpers/jwt")

class usercontroller{
    static async register(req, res) {
        try {
            const {
                email,
                password
            } = req.body
            
            if (!email || !password) {
                throw {
                  status: 400,
                  message: "Email and password are required",
                };
            }

            const checkEmail = await db.query(
                `SELECT * FROM users WHERE email=$1`,
                [String(email)]
              );
          
            if (checkEmail.rows.length > 0) {
                throw {
                        code: 402,
                        message: "Email Already Use"
                    }
            }
            const hashedPassword = await hashPassword(password)
            const data = await db.query(
                'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *',
                [String(email), String(hashedPassword)]
            );
            const convert = data.rows[0]
            const response = {
                id: convert.id,
                email: convert.email
            }

            const token = generateToken({ email: convert.email })
            res.status(200).json({token})
        } catch (error) {
            res.status(error?.code || 500).json(error)
            console.log(error)
        }

    }
}

module.exports = usercontroller