import { User } from "../../types/users-types";

type GetUsersResponse = {
  users: User[];
};
export const getUsers = async () => {
  const response = await fetch(`http://localhost:4000/users`);
  const data: GetUsersResponse = await response.json();

  return data.users;
};
