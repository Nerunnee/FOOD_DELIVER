type Credentials = {
  email: string;
  password: string;
};

type SignInResponse = {
  accessToken: string;
};

export const signIn = async (credentials: Credentials) => {
  console.log("credentials: ", credentials);

  const response = await fetch("/api/user/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
    body: JSON.stringify(credentials),
  });

  const responseData = (await response.json()) as SignInResponse;

  return responseData;
};
