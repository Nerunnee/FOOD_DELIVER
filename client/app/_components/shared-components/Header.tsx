import { Button } from "@/components/ui/button";
import { ChefHat, ChevronRight, MapPin, User } from "lucide-react";
import { CardSheet } from "../CardSheet";

export function Header() {
  return (
    <div className="bg-black">
      <div className="flex justify-between items-center mx-22 py-3">
        <div className="flex items-center gap-2">
          <ChefHat size={45} color="red" />
          <div className="font-semibold">
            <p className="text-lg text-white">
              Nom <span className="text-red-500">Nom</span>
            </p>
            <p className="text-sm text-white">Swift delivery</p>
          </div>
        </div>

        <div className="flex gap-3">
          <Button className="bg-white flex items-center">
            <MapPin size={20} color="red" />
            <p className="text-red-500">Delivery address:</p>
            <p className="text-gray-500">Add Location</p>
            <ChevronRight size={20} color="gray" />
          </Button>
          <CardSheet />

          <Button className="bg-red-500 hover:bg-red-500">
            <User size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
