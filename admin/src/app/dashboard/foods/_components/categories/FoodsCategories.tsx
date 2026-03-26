import { Category } from "@/lib/types/categories-types";
import { AddCategory } from "./_components/AddCategory";
import { Categories } from "./_components/Categories";

type FoodsCategoriesProps = {
  categories: Category[];
};

export const FoodsCategories = (props: FoodsCategoriesProps) => {
  const { categories } = props;
  return (
    <div className="flex gap-5 items-center w-full">
      <Categories categories={categories} />
      <AddCategory />
    </div>
  );
};
