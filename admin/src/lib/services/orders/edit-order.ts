"use server";

import { cookies } from "next/headers";

export const putOrder = async (id: number, status: string) => {
  const body = { status };
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  try {
    await fetch(`${process.env.API_URL}/orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.log(error);
  }
};
