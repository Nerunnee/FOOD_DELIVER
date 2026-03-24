import { FoodCard } from "@/components/shared-components/food_card";
import { getCategories } from "@/lib/services/get-categories";

export default async function Home() {
  const categories = await getCategories();

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <div>{category.name}</div>

          <div>
            {category.foods.map((food) => (
              <div key={food.id}>
                <FoodCard
                  name={food.foodName}
                  price={food.price}
                  desc={food.ingredients}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
