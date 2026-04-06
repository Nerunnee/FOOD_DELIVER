import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Mail } from "lucide-react";
import { cookies } from "next/headers";

type User = {
  email: string;
  phoneNumber: string;
  address: string;
  age: number;
  id: number;
};

const getUser = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log(token);

  const response = await fetch(`http://localhost:4000/users/auth/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const user = (await response.json()) as User;

  return user;
};

export const Header = async () => {
  const user = await getUser();

  console.log(user);

  return (
    <div className="flex justify-end mr-5">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 mr-12">
          <DropdownMenuGroup>
            <DropdownMenuItem className="flex items-center">
              <Mail /> {user.email}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
