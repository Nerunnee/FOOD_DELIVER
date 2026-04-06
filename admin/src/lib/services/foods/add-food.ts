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

  await fetch("http://localhost:3000/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(food),
  });
};
