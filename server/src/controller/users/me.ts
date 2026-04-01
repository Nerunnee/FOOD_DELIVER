import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const me = async (req: Request, res: Response) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user?.userId },
    select: {
      id: true,
      email: true,
      phoneNumber: true,
      address: true,
      age: true,
    },
  });

  if (!user) return res.status(400).json({ message: "User not found" });

  return res.status(200).json(user);
};
