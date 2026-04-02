"use client";

import { Label } from "@/components/ui/label";
import { Food } from "@/lib/types/categories-types";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

type FoodCardProps = {
  food: Food;
};

export const FoodCardOrder = (props: FoodCardProps) => {
  const { food } = props;
  const { foodName, price, ingredients, image } = food;
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="h-100% w-100%">
      <div className="w-fit bg-white rounded-xl flex gap-5">
        <div>
          <img
            src="/pizza.jpg"
            alt="Pizza image"
            className="w-31 h-30 rounded-xl object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col justify-between gap-3">
            {foodName}

            <p className="text-xs">{ingredients}</p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between">
              <div>
                <Label className="text-xs text-gray-500">Unit Price</Label>
                <p className="text-xs">{Number(price).toLocaleString()}₮</p>
              </div>
              <div className="flex gap-3 items-center">
                <CircleMinus onClick={minusQuantity} />
                {quantity}
                <CirclePlus onClick={addQuantity} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
