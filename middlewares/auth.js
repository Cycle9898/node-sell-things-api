import jwt from "jsonwebtoken";

export function auth(req, res, next) {
	try {
		const token = req.headers.authorization.split(" ")[1];
		const jwtKey = process.env.SECRET_KEY || "DEFAULT_SECRET_KEY";
		const decodedToken = jwt.verify(token, jwtKey);
		const userId = decodedToken.userId;
		req.auth = { userId };
		next();
	} catch (error) {
		res.status(401).json({ error });
	}
}
