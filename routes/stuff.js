import express from "express";
import { Thing } from "../database/models/Thing.js";

export const stuffRouter = express.Router();

stuffRouter.get("/", (req, res, next) => {
	Thing.find()
		.then(things => res.status(200).json(things))
		.catch(error => res.status(400).json({ error }));
});

stuffRouter.get("/:id", (req, res, next) => {
	Thing.findOne({ _id: req.params.id })
		.then(thing => res.status(200).json(thing))
		.catch(error => res.status(404).json({ error }));
});

stuffRouter.post("/", (req, res, next) => {
	delete req.body._id;

	const thing = new Thing({
		...req.body
	});
	thing
		.save()
		.then(() => res.status(201).json({ message: "Objet enregistré !" }))
		.catch(error => res.status(400).json({ error }));
});

stuffRouter.put("/:id", (req, res, next) => {
	Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Objet modifié !" }))
		.catch(error => res.status(400).json({ error }));
});

stuffRouter.delete("/:id", (req, res, next) => {
	Thing.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Objet supprimé !" }))
		.catch(error => res.status(400).json({ error }));
});
