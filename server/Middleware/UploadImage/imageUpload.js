const express = require("express");
var ImageRouter = express.Router();
const multer = require("multer");
const pool = require("../../Configuration/dbconfig");
var nameImage;
var dateImg;

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "AnnonceImages");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});

ImageRouter.route("/upload").post(
	upload.array("attachments", 10),
	async (req, res, next) => {
		try {
			console.log("insert image successfull");
		} catch (err) {
			console.error(err.message);
		}
	}
);
module.exports = ImageRouter;
