import { cookies } from "next/headers";

export async function GE(request: Request) {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("token")?.value;

  const response = await fetch("http://localhost:3000/categories", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const responseData = await response.json();

  return new Response(JSON.stringify(responseData), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
