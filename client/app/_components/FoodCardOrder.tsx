"use client";

import { Food } from "@/lib/types/categories-types";
import { Minus, Plus, X } from "lucide-react";
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
    <div className="w-fit bg-white rounded-xl flex gap-5">
      <div>
        <img
          src="/pizza.jpg"
          alt="Pizza image"
          className="w-31 h-30 rounded-xl object-cover"
        />
      </div>

      <div className="flex flex-col justify-between">
        <div className="flex gap-2.5">
          <div className="flex flex-col">
            <p className="text-red-500 text-base font-bold">{foodName}</p>
            <p className="text-xs">{ingredients}</p>
          </div>
          <div className="h-8 w-8 border border-red-500 bg-white rounded-full p-2 flex items-center justify-center hover:bg-red-100">
            <X size={16} color="red" />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <Minus onClick={minusQuantity} size={16} />
              <p className="text-lg">{quantity}</p>
              <Plus onClick={addQuantity} size={16} />
            </div>

            <div>
              <p className="text-base">
                {(quantity * Number(price)).toLocaleString()}₮
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
