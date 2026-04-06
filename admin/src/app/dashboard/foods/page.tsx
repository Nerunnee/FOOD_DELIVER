import { getCategories } from "@/lib/services/categories/get-categories";
import { FoodsCategories } from "./_components/categories/FoodsCategories";
import { FoodsHero } from "./_components/foods/FoodsHero";

const FoodMenu = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-6">
      <FoodsCategories categories={categories} />
      <FoodsHero categories={categories} />
    </div>
  );
};

export default FoodMenu;
