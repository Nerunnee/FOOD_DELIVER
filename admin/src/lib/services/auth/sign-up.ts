type Credentials = {
  email: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  await fetch(`http://localhost:4000/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
    body: JSON.stringify(credentials),
  });
};
