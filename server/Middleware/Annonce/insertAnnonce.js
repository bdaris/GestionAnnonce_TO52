const pool = require("../../Configuration/dbconfig");

const InsertAnnonce = async (req, res) => {
	try {
		var datetime = new Date();
		const {
			titre,
			description,
			idcategorie,
			montant,
			ville,
			attachment,
		} = req.body;
		const newAnnonce = await pool.query(
			`INSERT INTO ANNONCE (num_client,
				titre_annonce,
				descript_annonce,
				montant_annonce,
				ville_annonce,
				datecreate_annonce,
				num_categorie,
				image_annonce)
				VALUES($1,$2,$3,$4,$5,$6,$7,$8)`,
			[
				1,
				titre,
				description,
				montant,
				ville,
				datetime.toISOString().slice(0, 10),
				idcategorie,
				attachment,
			]
		);
		res.json(newAnnonce);
		console.log("insert success");
	} catch (err) {
		console.error(err.message);
	}
};

module.exports = InsertAnnonce;
