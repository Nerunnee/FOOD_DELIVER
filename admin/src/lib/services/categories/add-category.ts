"use server";

import { cookies } from "next/headers";

type CategoryName = { name: string };

export const addCategory = async (categoryName: CategoryName) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  await fetch("http://localhost:4000/categories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
    body: JSON.stringify(categoryName),
  });
};
