import { cookies } from "next/headers";

type User = {
  email: string;
  phoneNumber: string;
  address: string;
  age: number;
  id: number;
};

export const getUserMe = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const response = await fetch(`${process.env.API_URL}/users/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  const user = (await response.json()) as User;

  return user;
};
