import express from "express";
import { login, logout, signUp } from "./auth.controller";

export const authModuleRoutes = express.Router();

authModuleRoutes.post("/login", login);
authModuleRoutes.post("/logout", logout);
authModuleRoutes.post("/sign-up", signUp);
