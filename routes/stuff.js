import express from "express";
import { auth } from "../middlewares/auth.js";
import { multerConfig } from "../middlewares/multer-config.js";
import * as stuffCtrl from "../controllers/stuff.js";

export const stuffRouter = express.Router();

stuffRouter.get("/", auth, stuffCtrl.getThings);

stuffRouter.get("/:id", auth, stuffCtrl.getOneThing);

stuffRouter.post("/", auth, multerConfig, stuffCtrl.createThing);

stuffRouter.put("/:id", auth, multerConfig, stuffCtrl.modifyThing);

stuffRouter.delete("/:id", auth, stuffCtrl.deleteThing);
