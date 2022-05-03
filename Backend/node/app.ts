import cors from "cors";
import bodyParser from "body-parser";
import express from "express";
import { appRoutes } from "./modules/routes";
import dotenv from "dotenv";

export const APP = express();
export const ENV = dotenv.config();

APP.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
}));
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: true }));

APP.use("/api", appRoutes);
