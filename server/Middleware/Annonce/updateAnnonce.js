const pool = require("../../Configuration/dbconfig");

const UpdateAnnonce = async (req, res) => {
	try {
		const { id } = req.params;
		const { titreannonce } = req.body;
		const updateAnnonce = await pool.query(
			"UPDATE ANNONCE SET titre_annonce=$1 WHERE id_annonce= $2",
			[titreannonce, id]
		);
		res.json("uAnnonce was update");
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = UpdateAnnonce;
