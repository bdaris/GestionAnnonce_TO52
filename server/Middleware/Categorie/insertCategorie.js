const pool = require("../../Configuration/dbconfig");
//Insert Categorie inside database
const InsertCategorie = async (req, res) => {
	try {
		const { libellecategorie } = req.body;
		const categorie = await pool.query(
			"insert into categorie (lib_categorie) values ($1)",
			[libellecategorie]
		);
		res.json(categorie);
	} catch (err) {
		console.log(err.message);
	}
};

module.exports = InsertCategorie;
