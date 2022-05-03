import {Router} from "express";
import {requireToken} from "../middlewares/requireToken";
import {authModuleRoutes} from "./auth/auth.router";
import {v1Routes} from "./v1/v1.router";

export const appRoutes: Router = Router();

/* Middlewares */
appRoutes.all("/trader/*", requireToken, (_req, _res, next) => next());

/* Auth module */
appRoutes.use("", authModuleRoutes);


/* Other modules */
/* V1 */
appRoutes.use('/v1', v1Routes);

