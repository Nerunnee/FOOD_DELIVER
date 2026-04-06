import { cookies } from "next/headers";
import { NextResponse } from "next/server";

type SignInResponse = {
  accessToken: string;
};

export async function POST(request: Request) {
  try {
    const credentials = await request.json();

    const cookieStore = await cookies();

    const response = await fetch(`${process.env.API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
      body: JSON.stringify(credentials),
    });

    const responseData = (await response.json()) as SignInResponse;

    cookieStore.set("token", responseData.accessToken);

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "invalid credentials" },
      { status: 400 },
    );
  }
}
