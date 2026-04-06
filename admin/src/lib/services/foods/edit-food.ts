"use server";

import { cookies } from "next/headers";

type FoodType = {
  foodName: string;
  price: string;
  ingredients: string;
  foodCategoryId: number;
  image: string;
};

export const onEditFood = async (foodId: number, food: FoodType) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  await fetch(`${process.env.API_URL}/foods/${foodId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
    body: JSON.stringify(food),
  });
};
