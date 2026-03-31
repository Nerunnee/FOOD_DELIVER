import { Button } from "@/components/ui/button";
import { Category } from "@/lib/types/categories-types";
import { AddCategory } from "./_components/AddCategory";
import { AddFoodCategory } from "./_components/AddFoodCategory";

type CategoriesProps = {
  categories: Category[];
};

export const FoodsCategories = async (props: CategoriesProps) => {
  const { categories } = props;

  return (
    <div className="flex flex-col bg-white gap-4 m-5 p-5 rounded-xl">
      <p className="text-xl font-semibold">Dishes category</p>
      <div className="flex flex-wrap gap-3">
        <Button variant="outline" className="text-sm font-medium">
          All dishes
          <p className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
            {categories.flatMap((category) => category.foods).length}
          </p>
        </Button>
        {categories.map((category) => {
          return (
            <div key={category.id}>
              <Button variant="outline" className="text-sm font-medium flex">
                {category.name}
                <p className="h-7 w-7 bg-black text-white rounded-full flex items-center justify-center p-3">
                  {category.foods.length === 0 ? (
                    <AddFoodCategory
                      categories={categories}
                      currentCategory={category.id}
                    />
                  ) : (
                    category.foods.length
                  )}
                </p>
              </Button>
            </div>
          );
        })}
        <AddCategory />
      </div>
    </div>
  );
};
