"use client";

import { LoaderCircle, Pencil, Plus } from "lucide-react";
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
import { Category, Food } from "@/lib/types/categories-types";
import { CategorySelector } from "./CategorySelector";

type DeleteFoodProps = {
  food: Food;
  categories: Category[];
};

export function DeleteFood(props: DeleteFoodProps) {
  const { categories, food } = props;

  const [open, setOpen] = useState(false);
  const [deleteFood, setDeleteFood] = useState<{
    foodName: string;
    price: string;
    foodCategoryId: number;
    ingredients: string;
    image: string;
  }>({
    foodName: food.foodName,
    price: food.price,
    foodCategoryId: food.foodCategoryId,
    ingredients: food.ingredients,
    image: food.image,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setDeleteFood({ ...food, [event.target.name]: event.target.value });
  };

  const onSelectCategory = (foodCategoryId: number) => {
    setDeleteFood({ ...food, foodCategoryId: foodCategoryId });
  };

  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      foodName: food.foodName,
      price: food.price,
      ingredients: food.ingredients,
      foodCategoryId: food.foodCategoryId,
      image: food.image,
    };

    try {
      await fetch(`http://localhost:3000/foods/${food.id}`, {
        method: "DELETE",
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
    <div className="w-68 rounded-xl flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="flex flex-col items-center gap-6">
          <div>
            <Pencil size={16} className="text-red-500" />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Dishes infos</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="grid flex-1 gap-2">
              <Label>Food name</Label>
              <Input
                type="text"
                placeholder="Type food name..."
                name="foodName"
                onChange={handleChange}
                value={deleteFood.foodName}
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
                value={deleteFood.ingredients}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food Price</Label>
              <Input
                type="text"
                placeholder="Enter price..."
                name="price"
                onChange={handleChange}
                value={deleteFood.price}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food image</Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={deleteFood.image}
              />
            </div>
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
