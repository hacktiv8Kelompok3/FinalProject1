const db = require('../config/connection')
const { verifyToken } = require("../helpers/jwt")

const authentication = async (req, res, next) => { 
    try {
        const {token} = req.headers

        if (!token) {
            throw {
                code: 401,
                message: "Invalid token"
            }
        }

        const decode = verifyToken(token)

        console.log(decode, "<<<accsess_token")
        const user = await db.query(
            `SELECT * FROM users WHERE id=$1 and email=$2`,
            [String(decode.id),String(decode.email)]
        );
        const data = user.rows[0]
        if (!data) {
            throw {
                code: 401,
                message: "user not found"
            }
        }
        req.UserData = {
            id: data.id,
            email: data.email,
        }
        next()
    } catch (error) {
        res.status(error?.code || 500).json(error)
    }
}

module.exports = authentication;