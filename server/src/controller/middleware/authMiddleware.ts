import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

type Token = {
  data: {
    userId: number;
    email: string;
    role: "USER" | "ADMIN";
  };
};

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  const accessToken = authorization?.split(" ")[1];

  if (!accessToken) return res.send("not found");

  const secretToken = process.env.NERUNNEEJWT!;
  try {
    const decoded = jwt.verify(accessToken, secretToken) as Token;

    req.user = decoded.data;

    next();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "invalid inputs" });
  }
};
