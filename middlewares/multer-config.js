import multer from "multer";

const mimeTypes = {
	"image/jpg": "jpg",
	"image/jpeg": "jpg",
	"image/png": "png"
};

const storage = multer.diskStorage({
	destination: (req, file, callback) => {
		callback(null, "images");
	},
	filename: (req, file, callback) => {
		const name = file.originalname.trim().replaceAll(" ", "_");
		const extension = mimeTypes[file.mimetype];
		callback(null, name + "__" + Date.now() + "." + extension);
	}
});

export const multerConfig = multer({ storage }).single("image");
