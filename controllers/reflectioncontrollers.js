const db = require('../config/connection')

class reflectioncontroller { 
    static async createReflection(req, res) {
        try {
            const { success, low_point, take_away } = req.body;
            if (!success || !low_point || !take_away) {
                throw {
                    code: 401,
                    message: 'invalid'
                }
            }
            console.log(success)
            res.status(200).json("oke")
        } catch (error) {
            res.status(error?.code || 500).json(error)
        }
    }
}
module.exports = reflectioncontroller