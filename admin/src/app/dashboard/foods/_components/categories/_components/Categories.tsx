import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/services/get-categories";

export const Categories = async () => {
  const categories = await getCategories();

  return (
    <div className="flex gap-5">
      {categories.map((category) => {
        return (
          <div key={category.id}>
            <Button variant="outline" className="text-sm font-medium py-5">
              {category.name}

              <p className="w-7 h-7  bg-black text-white rounded-full flex items-center justify-center">
                {category.foods.length}
              </p>
            </Button>
          </div>
        );
      })}
    </div>
  );
};
