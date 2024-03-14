import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

export const app = express();

// Database test connection
mongoose
	.connect(process.env.DB_URL || "mongodb://localhost:27017")
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(error => console.log(`Échec de la connexion à MongoDB : ${error}`));

// Body parser middleware
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
	res.set("Access-Control-Allow-Origin", "*");
	res.set(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
	);
	res.set(
		"Access-Control-Allow-Methods",
		"GET, POST, PUT, DELETE, PATCH, OPTIONS"
	);

	next();
});

// Endpoints
app.get("/api/stuff", (req, res, next) => {
	const stuff = [
		{
			_id: "oeihfzeoi",
			title: "Mon premier objet",
			description: "Les infos de mon premier objet",
			imageUrl:
				"https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
			price: 4900,
			userId: "qsomihvqios"
		},
		{
			_id: "oeihfzeomoihi",
			title: "Mon deuxième objet",
			description: "Les infos de mon deuxième objet",
			imageUrl:
				"https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg",
			price: 2900,
			userId: "qsomihvqios"
		}
	];
	res.status(200).json(stuff);
});

app.post("/api/stuff", (req, res, next) => {
	console.log(req.body);
	res.status(201).json({ message: "Objet créé !" });
});
