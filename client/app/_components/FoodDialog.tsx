"use client";

import { Food } from "@/lib/types/categories-types";
import { useContext, useState } from "react";
import { CardContext } from "../_context/CartContext";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CircleMinus, CirclePlus, LoaderCircle, Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";

type FoodCardProps = {
  food: Food;
};

export const FoodDialog = (props: FoodCardProps) => {
  const { food } = props;
  const { foodName, price, ingredients, image } = food;
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { addCard } = useContext(CardContext);

  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    setQuantity(quantity - 1);
  };

  const onAdd = () => {
    setLoading(true);
    try {
      addCard(food, quantity);
      router.refresh();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-100% w-100%">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="w-fit bg-white rounded-xl flex gap-5">
            <div>
              <img
                src={image}
                alt="Pizza image"
                className="w-90 h-50 rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex flex-col justify-between gap-3">
                <DialogTitle className="text-red-500 font-medium mt-5">
                  {foodName}
                </DialogTitle>
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

                <Button type="button" onClick={onAdd} disabled={loading}>
                  {loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    "Add Cart"
                  )}
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
