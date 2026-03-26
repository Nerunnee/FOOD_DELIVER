import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

type FoodCardProps = {
  //   img: string;
  name: string;
  price: string;
  desc: string;
};

export const FoodCard = (props: FoodCardProps) => {
  const { name, price, desc } = props;
  return (
    <div className="w-fit p-4 border border-gray-400 rounded-xl flex flex-col gap-5">
      <div className="relative">
        <img
          src="/pizza.jpg"
          alt="Pizza image"
          className="w-59.75 h-32.25 rounded-xl object-cover"
        />
        <div className="absolute bottom-1 right-1 h-11 w-11 bg-white rounded-full flex items-center justify-center">
          <Pencil size={16} className="text-red-500" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-red-500 font-medium">{name}</p>
          <p className="text-xs">{price}₮</p>
        </div>

        <p className="w-59.75 text-xs truncate">{desc}</p>
      </div>
    </div>
  );
};
