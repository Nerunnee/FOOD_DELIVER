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
    <div className="flex flex-wrap gap-3 p-5">
      {categories.map((category) => {
        return (
          <div key={category.id} className="">
            <Button variant="outline" className="text-sm font-medium py-5">
              {category.name}
              <p className="w-7 h-7 bg-black text-white rounded-full flex items-center justify-center">
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
  );
};
