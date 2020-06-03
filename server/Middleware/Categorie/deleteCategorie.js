const pool = require('../../Configuration/dbconfig')

const deleteCategorie = async (req,res) =>{
    try{
        const { id } = req.params;
		const deleteAnnonce = await pool.query(
			"delete from annonce where id_annonce=$1",
			[id]
		);
		res.json(`${id} was delete!`);
    }catch(err){
        console.log(err.message)
    }
}

module.exports = deleteCategorie;