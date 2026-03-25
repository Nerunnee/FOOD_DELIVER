import { AddCategory } from "./_components/AddCategory";
import { Categories } from "./_components/Categories";

export const FoodsCategories = () => {
  return (
    <div className="flex gap-5 items-center w-full">
      <Categories />
      <AddCategory />
    </div>
  );
};
