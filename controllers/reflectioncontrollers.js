const db = require('../config/connection')

class reflectioncontroller { 
    static async createReflection(req, res) {
        try {
            const { id } = req.UserData
            const { success, low_point, take_away } = req.body;
            if (!success || !low_point || !take_away) {
                throw {
                    code: 400,
                    message: "required",
                }
            }
            const insertData = await db.query(
                'INSERT INTO reflections (success,low_point,take_away,userid) VALUES ($1,$2,$3,$4) RETURNING *',
                [String(success), String(low_point), String(take_away),id]
            )
            res.status(200).json(insertData.rows[0])
        } catch (error) {
            res.status(error?.code || 500).json(error)
        }
    }
}
module.exports = reflectioncontroller