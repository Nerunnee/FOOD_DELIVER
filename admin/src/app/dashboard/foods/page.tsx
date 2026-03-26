import { getCategories } from "@/lib/services/get-categories";
import { FoodsCategories } from "./_components/categories/FoodsCategories";
import { FoodsHero } from "./_components/foods/FoodsHero";

const FoodMenu = async () => {
  const categories = await getCategories();

  return (
    <div>
      <FoodsCategories categories={categories} />
      <FoodsHero categories={categories} />
    </div>
  );
};

export default FoodMenu;
