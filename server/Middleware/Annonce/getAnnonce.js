const pool = require("../../Configuration/dbconfig");

const GetAllAnnonce = async(req,res) =>{
    try {
		const allAnnonce = await pool.query("SELECT * FROM ANNONCE");
		res.json(allAnnonce.rows);
	} catch (err) {
		console.error(err.message);
	}
}

module.exports = GetAllAnnonce;