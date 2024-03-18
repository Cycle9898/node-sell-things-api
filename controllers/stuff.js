import { Thing } from "../database/models/Thing.js";

export function getThings(req, res, next) {
	Thing.find()
		.then(things => res.status(200).json(things))
		.catch(error => res.status(400).json({ error }));
}

export function getOneThing(req, res, next) {
	Thing.findOne({ _id: req.params.id })
		.then(thing => res.status(200).json(thing))
		.catch(error => res.status(404).json({ error }));
}

export function createThing(req, res, next) {
	const thingObject = JSON.parse(req.body.thing);
	delete thingObject._id;
	delete thingObject.userId;

	const thing = new Thing({
		...thingObject,
		userId: req.auth.userId,
		imageUrl: `${req.protocol}://${req.get("host")}/images/${
			req.file.filename
		}`
	});

	thing
		.save()
		.then(() => res.status(201).json({ message: "Objet enregistré !" }))
		.catch(error => res.status(400).json({ error }));
}

export function modifyThing(req, res, next) {
	Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
		.then(() => res.status(200).json({ message: "Objet modifié !" }))
		.catch(error => res.status(400).json({ error }));
}

export function deleteThing(req, res, next) {
	Thing.deleteOne({ _id: req.params.id })
		.then(() => res.status(200).json({ message: "Objet supprimé !" }))
		.catch(error => res.status(400).json({ error }));
}
