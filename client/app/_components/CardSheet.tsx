"use client";

import { useContext } from "react";
import { CardContext } from "../_context/CartContext";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FoodCardOrder } from "./FoodCardOrder";

export function CardSheet() {
  const data = useContext(CardContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white">
          <ShoppingCart size={16} color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3">
            <ShoppingCart size={24} />
            Order detail
          </SheetTitle>
        </SheetHeader>
        <div className="grid flex-1 auto-rows-min gap-6 px-4">
          <div className="grid gap-3">
            <Label htmlFor="sheet-demo-name">My cart</Label>
            {data.card.map((card, index) => {
              return (
                <div key={index}>
                  <FoodCardOrder food={card.food} />
                </div>
              );
            })}
          </div>
        </div>
        <SheetFooter>
          <Button type="submit">Save changes</Button>
          <SheetClose asChild>
            <Button variant="outline">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
