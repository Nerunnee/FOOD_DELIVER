"use client";

import { LoaderCircle, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { Category } from "@/lib/types/categories-types";
import { CategorySelector } from "./CategorySelector";

type AddFoodProps = {
  categories: Category[];
};

export function AddFood(props: AddFoodProps) {
  const { categories } = props;

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState<{
    foodName: string;
    price: number;
    categoryId: null | number;
    ingredients: string;
  }>({
    foodName: "",
    price: 0,
    categoryId: null,
    ingredients: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setFood({ ...food, [event.target.name]: event.target.value });
  };

  const onSelectCategory = (categoryId: number) => {
    setFood({ ...food, categoryId: categoryId });
  };

  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      foodName: food.foodName,
      price: food.price,
      ingredients: food.ingredients,
      foodCategoryId: food.categoryId,
      image: "",
    };

    try {
      await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${process.env.ADMINJWT}`,
        },
        body: JSON.stringify(postBody),
      });
      router.refresh();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <div className="w-68 border border-dashed border-red-500 rounded-xl flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="flex flex-col items-center gap-6">
          <div>
            <div className="h-9 w-9 bg-red-500 rounded-full flex items-center justify-center text-white">
              <Plus size={16} />
            </div>
            <p className="text-sm font-medium">Add new Dish to</p>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add new Dish to Appetizers</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="grid flex-1 gap-2">
              <Label>Food name</Label>
              <Input
                type="text"
                placeholder="Type food name..."
                name="foodName"
                onChange={handleChange}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Category</Label>
              <CategorySelector
                categories={categories}
                onSelect={onSelectCategory}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Ingredients</Label>
              <Input
                type="text"
                placeholder="List ingredients..."
                name="ingredients"
                onChange={handleChange}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food Price</Label>
              <Input
                type="text"
                placeholder="Enter price..."
                name="price"
                onChange={handleChange}
              />
            </div>

            {/* <div className="grid flex-1 gap-2">
              <Label>Food image</Label>
              <Input type="file" onChange={handleChange} name="image" />
            </div> */}
          </div>

          <DialogFooter className="sm:justify-end">
            <Button type="button" onClick={onAddFood} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Add food"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
