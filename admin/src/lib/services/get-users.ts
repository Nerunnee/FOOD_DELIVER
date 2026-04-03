import { User } from "../types/users-types";

type GetUsersResponse = {
  users: User[];
};
export const getUsers = async () => {
  const response = await fetch(`${process.env.API_URL}/users`);
  const data: GetUsersResponse = await response.json();

  return data.users;
};
