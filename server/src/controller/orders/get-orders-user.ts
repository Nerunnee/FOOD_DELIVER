import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";

export const getOrdersUser = async (req: Request, res: Response) => {
  const userId = req.user?.userId;
  try {
    const orders = await prisma.foodOrder.findMany({
      where: { userId: userId },
      include: {
        foodOrderItems: true,
      },
    });

    res.json({ orders });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "invalid inputs" });
  }
};
