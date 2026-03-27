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
    <div className="flex flex-col gap-5 p-5">
      {filteredCategories.map((category) => {
        return (
          <div key={category.id} className="flex flex-col gap-4">
            <h1 className="flex gap-2 text-xl font-semibold">
              {category.name}
              <p>({category.foods.length})</p>
            </h1>
            <div className="flex flex-wrap gap-4">
              <AddFood categories={categories} />
              {category.foods.map((food) => (
                <div key={food.id}>
                  <FoodCard food={food} categories={categories} />
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
