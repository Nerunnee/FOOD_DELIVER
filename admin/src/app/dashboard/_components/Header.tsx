import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getUserMe } from "@/lib/services/users/get-user-me";
import { Mail } from "lucide-react";

export const Header = async () => {
  const user = await getUserMe();

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
