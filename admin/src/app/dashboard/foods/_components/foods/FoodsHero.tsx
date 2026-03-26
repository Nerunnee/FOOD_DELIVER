import { FoodCard } from "@/components/shared-components/foodCard";
import { AddFood } from "./AddFood";
import { Category } from "@/lib/types/categories-types";

type FoodsHeroProps = {
  categories: Category[];
};

export const FoodsHero = async (props: FoodsHeroProps) => {
  const { categories } = props;

  const filteredCategories = categories.filter(
    (category) => category.foods.length !== 0,
  );

  return (
    <div className="flex flex-col gap-5">
      {filteredCategories.map((category) => {
        return (
          <div key={category.id}>
            <h1>{category.name}</h1>
            <div className="flex gap-4">
              <AddFood categories={categories} />
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
        );
      })}
    </div>
  );
};
