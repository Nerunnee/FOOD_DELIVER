import { FoodCard } from "@/components/shared-components/foodCard";
import { Category } from "@/lib/types/categories-types";
import { AddFood } from "./_components/AddFood";

type FoodsHeroProps = {
  categories: Category[];
};

export const FoodsHero = async (props: FoodsHeroProps) => {
  const { categories } = props;

  const filteredCategories = categories.filter(
    (category) => category.foods.length !== 0,
  );

  return (
    <div className="flex flex-col gap-5 p-5 w-full">
      {filteredCategories.map((category) => {
        return (
          <div
            key={category.id}
            className="flex flex-col gap-4 bg-white rounded-xl"
          >
            <h1 className="flex gap-2 text-xl font-semibold m-5">
              {category.name}
              <p>({category.foods.length})</p>
            </h1>
            <div className="flex flex-wrap gap-4 m-5">
              <AddFood categories={categories} currentCategory={category.id} />
              {category.foods.map((food) => (
                <div key={food.id}>
                  <FoodCard
                    food={food}
                    categories={categories}
                    currentCategory={category.id}
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
