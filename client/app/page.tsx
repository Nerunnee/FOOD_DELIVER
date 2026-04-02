import { FoodCard } from "@/components/shared-components/food_card";
import { getCategories } from "@/lib/services/get-categories";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-12">
      {categories.map((category) => (
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
