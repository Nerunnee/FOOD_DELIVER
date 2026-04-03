type Credentials = {
  email: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  await fetch(`${process.env.API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
