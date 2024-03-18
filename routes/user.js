import express from "express";
import * as userCtrl from "../controllers/user.js";

export const userRouter = express.Router();

userRouter.post("/signup", userCtrl.signup);

userRouter.post("/login", userCtrl.login);
