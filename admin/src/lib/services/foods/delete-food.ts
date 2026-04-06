"use server";

import { cookies } from "next/headers";

export const onDeleteFood = async (foodId: number) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  await fetch(`${process.env.API_URL}/foods/${foodId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });
};
