import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import { stuffRouter } from "./routes/stuff.js";
import { userRouter } from "./routes/user.js";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

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
app.use("/api/stuff", stuffRouter);

app.use("/api/auth", userRouter);

app.use("/images", express.static(path.join(__dirname, "images")));
