import { cookies } from "next/headers";

type SignInResponse = {
  accessToken: string;
};

export async function POST(request: Request) {
  const credentials = await request.json();

  const cookiesStore = await cookies();

  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const responseData = (await response.json()) as SignInResponse;

  cookiesStore.set("token", responseData.accessToken);

  return new Response("ok");
}
