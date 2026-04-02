import { ChefHat } from "lucide-react";

export function Footer() {
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
        <div></div>
      </div>
    </div>
  );
}
