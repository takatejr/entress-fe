import { defer, Observable, of } from "rxjs";
import * as bcrypt from "bcrypt";

export const randomToken = (length: number): string => {
  const allowedCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  let list = [];
  for (let i = 0; i < length; i++) {
    const j: number = parseInt(
      (Math.random() * (allowedCharacters.length - 1)).toFixed(0),
      10,
    );
    list[i] = allowedCharacters[j];
  }
  return list.join("");
};

export const generateToken = (user: any) => {
  const payload = { iss: "HQ", sub: user.login };
  return randomToken(256);
};

export const verifyToken = (token: string) => {
  if (!token) return { message: "You don't have token to authorize." };
  return "token";
};

export const hashPassword = (password: string): Observable<string> => {
  const salt = bcrypt.genSalt(10);
  return defer(async () => await bcrypt.hash(password, await salt));
};

export const comparePasswords = (
  newPassword: string,
  passwordHash: string,
): Observable<boolean> => {
  return defer(() => bcrypt.compare(newPassword, passwordHash));
};
