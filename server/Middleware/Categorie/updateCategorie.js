const pool = require("../../Configuration/dbconfig");

const UpdateCategorie = async (req, res) => {
	try {
		const { id } = req.params;
		const { libellecategorie } = req.body;
		const updateAnnonce = await pool.query(
			"UPDATE CATEGORIE SET lib_categorie=$1 WHERE id_categorie= $2",
			[libellecategorie, id]
		);
		res.json("Catégorie was update");
	} catch (err) {
		console.error(err.message);
	}
};
