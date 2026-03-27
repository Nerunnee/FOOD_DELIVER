import { EditFood } from "@/app/dashboard/foods/_components/foods/_components/EditFood";
import { Category, Food } from "@/lib/types/categories-types";

type FoodCardProps = {
  food: Food;
  categories: Category[];
};

export const FoodCard = (props: FoodCardProps) => {
  const { food, categories } = props;
  const { foodName, price, ingredients, image } = food;

  return (
    <div className="w-fit p-4 border border-gray-400 rounded-xl flex flex-col gap-5">
      <div className="relative">
        <img
          src="/pizza.jpg"
          alt="Pizza image"
          className="w-59.75 h-32.25 rounded-xl object-cover"
        />
        <div className="absolute bottom-1 right-1 h-11 w-11 bg-white rounded-full flex items-center justify-center">
          <EditFood categories={categories} food={food} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-red-500 font-medium">{foodName}</p>
          <p className="text-xs">{price}₮</p>
        </div>

        <p className="w-59.75 text-xs truncate">{ingredients}</p>
      </div>
    </div>
  );
};
