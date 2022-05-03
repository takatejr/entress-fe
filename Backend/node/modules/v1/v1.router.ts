import express from "express";
import {login} from "../auth/auth.controller";
import {intershipOffersRouter} from "./intership-offers/intership-offers.router";


export const v1Routes = express.Router();

v1Routes.use('/intership', intershipOffersRouter)
