import express from "express";
import * as stuffCtrl from "../controllers/stuff.js";

export const stuffRouter = express.Router();

stuffRouter.get("/", stuffCtrl.getThings);

stuffRouter.get("/:id", stuffCtrl.getOneThing);

stuffRouter.post("/", stuffCtrl.createThing);

stuffRouter.put("/:id", stuffCtrl.modifyThing);

stuffRouter.delete("/:id", stuffCtrl.deleteThing);
