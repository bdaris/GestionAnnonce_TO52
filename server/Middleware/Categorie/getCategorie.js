const pool = require("../../Configuration/dbconfig")
// Get all categorie
const GetAllCategorie = async (req,res) => {
    try{
        const allCategorie = await pool.query("SELECT * FROM CATEGORIE")
        res.json(allCategorie.rows)
    }catch(err){
        console.log(err.message)
    }
}
module.exports = GetAllCategorie;
