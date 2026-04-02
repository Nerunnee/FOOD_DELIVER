"use client";

import { useContext } from "react";
import { CardContext } from "../_context/CartContext";
import {
  Sheet,
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
  const shippinfPrice = 1000;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-white">
          <ShoppingCart size={16} color="black" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-neutral-700 rounded-l-4xl overflow-scroll">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-3 text-white text-xl">
            <ShoppingCart size={24} />
            Order detail
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4 justify-between">
          <div className="grid gap-5 p-4 bg-white rounded-2xl">
            <Label className="text-xl font-semibold">My cart</Label>
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
          {data.card.map((card, index) => {
            return (
              <div key={index}>
                <div className="flex flex-col gap-5 p-4 bg-white rounded-2xl">
                  <Label className="text-xl font-semibold">Payment info</Label>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between">
                      Items <span>{card.food.price}</span>
                    </div>

                    <div className="flex justify-between">
                      Shipping <span>{shippinfPrice}₮</span>
                    </div>
                  </div>

                  <div className="border border-dashed"></div>

                  <div className="flex justify-between">
                    Total price
                    <span>
                      {Number(card.food.price) * card.quantity + shippinfPrice}
                    </span>
                  </div>

                  <Button type="submit" className="bg-red-500 text-white">
                    Checkout
                  </Button>
                </div>
              </div>
            );
          })}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
