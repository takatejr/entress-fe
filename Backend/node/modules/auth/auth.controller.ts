import { Request, Response } from "express";
import { catchError, combineLatest, first, map, of, switchMap, tap } from "rxjs";
import { comparePasswords, generateToken } from "./auth.utils";
import { User } from "@prisma/client";
import { createUser, getUserByLogin, getUserByMail } from "./auth.service";

export const login = (req: Request, res: Response) => {
    const { login, password } = req.body;

    getUserByLogin(login)
        .pipe(
            switchMap((user: User | null) =>
                user ? comparePasswords(password, user.password) : of(false),
            ),
            tap((isUserExist: boolean) => {
                if (isUserExist) {
                    res.cookie("token", generateToken(256))
                    res.status(200).send({ url: "/" });
                } else {
                    res.status(400).send({ message: "User not exist" });
                }
            }),
        )
        .subscribe();
};

export const signUp = (req: Request, res: Response) => {
    const { login, password, email } = req.body;

    combineLatest([getUserByLogin(login), getUserByMail(email)])
        .pipe(
            map(([isLoginExist, isEmailExist]: any[]): boolean => {
                if (isLoginExist)
                    res.status(400).send({ message: "User with this login already exist" });
                if (isEmailExist)
                    res.status(400).send({ message: "User with this email already exist" });
                return false;
            }),
            switchMap((isUserExist: boolean | null) => {
                if (!isUserExist) {
                    createUser(login, password, email)
                        .pipe(
                            first(),
                            catchError((error) => {
                                res.status(400).send({ message: "Database connection lost" });

                                return of(error);
                            }))
                        .subscribe((response) => console.log(response));
                }
                return of(null);
            }),
        );
};

export const logout = (_req: Request, res: Response) => {
    res.clearCookie("token");
    res.status(200).send({ url: "/" });
};
