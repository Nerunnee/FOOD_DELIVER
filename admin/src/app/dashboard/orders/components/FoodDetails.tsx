import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Order } from "@/lib/types/orders-types";
import { ChevronDown } from "lucide-react";

type FoodDetailsProps = {
  order: Order;
};

export function FoodDetails({ order }: FoodDetailsProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex text-sm gap-15 items-center justify-center"
      >
        <div>
          <p>{order.foodOrderItems.length} foods</p>
          <ChevronDown size={16} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-65.75">
        <DropdownMenuGroup>
          {order.foodOrderItems.map((item) => {
            return (
              <div className="flex p-3 gap-3 items-center text-xs">
                <img
                  src="/pizza.jpg"
                  alt="Food Image"
                  className="w-8 h-8 rounded-sm"
                />
                <p className="mr-3 w-40">{item.food.foodName}</p>
                <p>x{item.quantity}</p>
              </div>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
