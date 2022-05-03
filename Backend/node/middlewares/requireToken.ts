import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../modules/auth/auth.utils";

export const requireToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (req?.cookies?.token) {
    verifyToken(req.cookies.token)
      ? next()
      : res
          .status(401)
          .send({ message: "Unauthorized, Contant with owner site." });
  } else {
    res?.redirect("/login");
  }
};
