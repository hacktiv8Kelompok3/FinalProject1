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
    static async getReflection(req, res) {
        try {
            const { id } = req.UserData
            const data = await db.query(
                `SELECT * FROM reflections WHERE userid=$1`,
                [id]
            );
            console.log(data.rows)
            res.status(200).json(data.rows)
        } catch (error) {
            res.status(error?.code || 500).json(error)
        }
    }
    static async updateReflection(req,res){
        try{
            const { id } = req.UserData
            const { take_away } = req.body
            const reflectid = parseInt(req.params.id)
            if(!take_away){
                throw {
                    code: 400,
                    message: "required",
                }
            }
            const updateData = await db.query(
                "UPDATE reflections SET take_away = $1 WHERE id = $2 AND userid = $3",
                [String(take_away),reflectid,id]
            )
            res.status(200).json(updateData.rows[0])
        }catch(error){
            res.status(500).json(error)
        }
    }
    static async deleteReflection(req,res){
        try{
            const { id } = req.UserData
            const reflectid = parseInt(req.params.id)
            const deleteData = await db.query(
                "DELETE FROM reflections WHERE id = $1 AND userid = $2",
                [id,reflectid]
            )
            res.status(200).json(deleteData.rows[0])
        }catch(error){
            res.status(500).json(error)
        }
    }
}
module.exports = reflectioncontroller