import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookiesStore = await cookies();

  const token = cookiesStore.get("token")?.value;

  const response = await fetch(`${process.env.API_URL}/categories`, {
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
