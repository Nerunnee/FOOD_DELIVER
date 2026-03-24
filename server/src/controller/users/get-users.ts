import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        orders: { include: { foodOrderItems: { include: { food: true } } } },
      },
      omit: { password: true },
    });

    res.json({ users });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "invalid inputs" });
  }
};
