"use server";

import { cookies } from "next/headers";

type FoodType = {
  foodName: string;
  price: number;
  ingredients: string;
  foodCategoryId: number | null;
  image: string;
};

export const addFood = async (food: FoodType) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  await fetch(`${process.env.API_URL}/foods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
    body: JSON.stringify(food),
  });
};
