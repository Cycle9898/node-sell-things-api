import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { Thing } from "./database/models/Thing.js";

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
	Thing.find()
		.then(things => res.status(200).json(things))
		.catch(error => res.status(400).json({ error }));
});

app.get("/api/stuff/:id", (req, res, next) => {
	Thing.findOne({ _id: req.params.id })
		.then(thing => res.status(200).json(thing))
		.catch(error => res.status(404).json({ error }));
});

app.post("/api/stuff", (req, res, next) => {
	delete req.body._id;

	const thing = new Thing({
		...req.body
	});
	thing
		.save()
		.then(() => res.status(201).json({ message: "Objet enregistré !" }))
		.catch(error => res.status(400).json({ error }));
});

app.put("/api/stuff/:id", (req, res, next) => {
	Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Objet modifié !" }))
		.catch(error => res.status(400).json({ error }));
});
