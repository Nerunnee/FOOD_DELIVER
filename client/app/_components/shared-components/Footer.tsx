import { getCategories } from "@/lib/services/categories/get-categories";
import { ChefHat } from "lucide-react";

export async function Footer() {
  const categories = await getCategories();
  return (
    <div className="bg-black h-188">
      <div className="flex justify-between items-center mx-22 pt-15 pb-28">
        <div className="flex items-center gap-2">
          <ChefHat size={45} color="red" />
          <div className="font-semibold">
            <p className="text-lg text-white">
              Nom <span className="text-red-500">Nom</span>
            </p>
            <p className="text-sm text-white">Swift delivery</p>
          </div>
        </div>

        <div className="flex justify-between w-197">
          <div className="text-white flex flex-col gap-4">
            <p className="text-muted-foreground">NOMNOM</p>
            <p>Home</p>
            <p>Contact us</p>
            <p>Delivery zone</p>
          </div>

          <div className="text-white gap-4">
            <p className="text-muted-foreground">MENU</p>

            {categories.map((category) => (
              <p key={category.id}>{category.name}</p>
            ))}
          </div>

          <div className="text-white">
            <p>FOLLOW US</p>
            <div className="flex">
              <img
                src="/facebook.png"
                alt="Facebook icon"
                className="h-7 w-7"
              />
              <img
                src="/instagram.png"
                alt="Instagram icon"
                className="h-7 w-7"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
