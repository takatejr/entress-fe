import express from "express";
import {getIntershipOffers, postIntershipOffers} from "./intership-offers.controller";

export const intershipOffersRouter = express.Router();

intershipOffersRouter.get("/offers", getIntershipOffers);
intershipOffersRouter.post("/offers", postIntershipOffers);

// authModuleRoutes.post("/login", login);
// authModuleRoutes.post("/logout", logout);
// authModuleRoutes.post("/sign-up", signUp);
