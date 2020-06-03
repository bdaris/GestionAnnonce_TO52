const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const bodyparser = require("body-parser");
const GetAllCategorie = require("./Middleware/Categorie/getCategorie");
const CreateCategorie = require("./Middleware/Categorie/insertCategorie");
const DeleteCategorie = require("./Middleware/Categorie/deleteCategorie");
const CreateAnnonce = require("./Middleware/Annonce/insertAnnonce");
const GetAllAnnonce = require("./Middleware/Annonce/getAnnonce");
const DeleteAnnonce = require("./Middleware/Annonce/deleteAnnonce");
const UpdateAnnonce = require("./Middleware/Annonce/updateAnnonce");
const ImageRouter = require("./Middleware/UploadImage/imageUpload");
const multer = require("multer");

//middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json({ limit: "50mb" }));
app.use(bodyparser.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads", express.static("AnnonceImages"));

// ROUTES //
app.get("/getallcategorie", GetAllCategorie); //Get all categorie
app.post("/createcategorie", CreateCategorie); //Create new categorie
app.delete("/deletecategorie/:id", DeleteCategorie); //Delete categorie

app.post("/annonce", CreateAnnonce); //Create new annonce
app.get("/getannonce", GetAllAnnonce); //Get all Annonce
app.delete("/deleteannonce/:id", DeleteAnnonce); //Delete Annonce id
app.put("/updateannonce/:id", UpdateAnnonce);

app.post("/upload", ImageRouter);

app.listen(PORT, () => {
	console.log(`server has started on port ${PORT}`);
});
