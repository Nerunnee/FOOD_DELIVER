import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type FoodCardProps = {
  //   img: string;
  name: string;
  price: string;
  desc: string;
};

export const FoodCard = (props: FoodCardProps) => {
  const { name, price, desc } = props;
  return (
    <div>
      <img src="/pizza.jpg" alt="Pizza image" className="w-40 h-70" />
      <Button>
        <Plus />
      </Button>

      <div>
        <p>{name}</p>
        <p>{price}₮</p>
      </div>

      <p>{desc}</p>
    </div>
  );
};
