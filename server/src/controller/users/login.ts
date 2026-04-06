import { Request, Response } from "express";
import { prisma } from "../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(email, password);

  const secretToken = process.env.NERUNNEEJWT;
  console.log("secretToken: ", secretToken);

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    console.log(user);

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(isMatch);

    if (isMatch) {
      const accessToken = jwt.sign(
        {
          data: {
            userId: user.id,
            email: user.email,
            role: user.role,
            password: user.password,
          },
        },
        secretToken!,
        { expiresIn: "1week" },
      );
      console.log("accessToken: ", accessToken);

      res.status(200).json({ accessToken });
    } else {
      res.status(400).json({ message: "invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "invalid inputs" });
  }
};
