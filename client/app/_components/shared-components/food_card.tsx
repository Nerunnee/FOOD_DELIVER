import { Food } from "@/lib/types/categories-types";
import { FoodDialog } from "../FoodDialog";

type FoodCardProps = {
  food: Food;
};

export const FoodCard = (props: FoodCardProps) => {
  const { food } = props;
  const { foodName, price, ingredients, image } = food;

  return (
    <div className="w-fit p-4 bg-white rounded-xl flex flex-col gap-5">
      <div className="relative">
        <img
          src="/pizza.jpg"
          alt="Pizza image"
          className="w-59.75 h-32.25 rounded-xl object-cover"
        />
        <div className="absolute bottom-1 right-1 bg-white rounded-full flex items-center justify-center">
          <FoodDialog food={food} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <p className="text-red-500 font-medium">{foodName}</p>
          <p className="text-xs">{Number(price).toLocaleString()}₮</p>
        </div>

        <p className="w-59.75 text-xs truncate">{ingredients}</p>
      </div>
    </div>
  );
};
