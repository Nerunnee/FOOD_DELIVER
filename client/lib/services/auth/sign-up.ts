type Credentials = {
  email: string;
  password: string;
};

export const signUp = async (credentials: Credentials) => {
  await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
