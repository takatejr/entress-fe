import { User } from "@prisma/client";
import { catchError, defer, Observable, of, switchMap, take } from "rxjs";
import { db } from "../../utils/db.connector";
import { hashPassword } from "./auth.utils";

export const getUserByLogin = (login: string): Observable<User | null> => {
    return defer(async () => await db.user.findUnique({ where: { login } }))
        .pipe(
            take(1),
            catchError(() => of(null)),
        );
};

export const getUserByMail = (email: string): Observable<User | null> => {
    return defer(async () => await db.user.findUnique({ where: { email } }))
        .pipe(
            take(1),
            catchError(() => of(null)),
        );
};

export const createUser = (
    login: string,
    password: string,
    email: string,
): Observable<User | null> => {
    return hashPassword(password).pipe(
        take(1),
        switchMap((password: string) =>
            db["user"].create({ data: { login, password, email, token: "" } }),
        ),
    );
};
