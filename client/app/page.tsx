import { getCategories } from "@/lib/services/get-categories";
import { FoodCard } from "./_components/shared-components/food_card";

export default async function Home() {
  const categories = await getCategories();

  const filteredCategories = categories.filter(
    (category) => category.foods.length,
  );

  return (
    <div className="flex flex-col gap-12">
      {filteredCategories.map((category) => (
        <div key={category.id} className="flex flex-col gap-12">
          <div className="text-3xl text-white">{category.name}</div>

          <div>
            {category.foods.map((food) => (
              <div key={food.id}>
                <FoodCard food={food} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
