"use client";

import { LoaderCircle, Pencil, Trash } from "lucide-react";
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

type EditFoodProps = {
  food: Food;
  categories: Category[];
  currentCategory: number;
};

export function EditFood(props: EditFoodProps) {
  const { categories, food, currentCategory } = props;

  const [open, setOpen] = useState(false);
  const [editFood, setEditFood] = useState<{
    foodName: string;
    price: string;
    foodCategoryId: number;
    ingredients: string;
    image: string;
  }>({
    foodName: food.foodName,
    price: food.price,
    foodCategoryId: food.foodCategoryId && currentCategory,
    ingredients: food.ingredients,
    image: food.image,
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setEditFood({ ...editFood, [event.target.name]: event.target.value });
  };

  const onSelectCategory = (foodCategoryId: number) => {
    setEditFood({ ...editFood, foodCategoryId: foodCategoryId });
  };

  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      foodName: editFood.foodName,
      price: editFood.price,
      ingredients: editFood.ingredients,
      foodCategoryId: editFood.foodCategoryId,
      image: editFood.image,
    };

    try {
      await fetch(`http://localhost:3000/foods/${food.id}`, {
        method: "PUT",
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

  const deleteFood = async () => {
    setLoading(true);

    try {
      await fetch(`http://localhost:3000/foods/${food.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${process.env.ADMINJWT}`,
        },
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
                value={editFood.foodName}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Category</Label>
              <CategorySelector
                categories={categories}
                onSelect={onSelectCategory}
                defaultValue={currentCategory}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Ingredients</Label>
              <Input
                type="text"
                placeholder="List ingredients..."
                name="ingredients"
                onChange={handleChange}
                value={editFood.ingredients}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food Price</Label>
              <Input
                type="text"
                placeholder="Enter price..."
                name="price"
                onChange={handleChange}
                value={editFood.price}
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food image</Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={editFood.image}
              />
            </div>
          </div>

          <DialogFooter className="sm:justify-between">
            <Button
              type="button"
              variant="destructive"
              onClick={deleteFood}
              disabled={loading}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Trash size={16} className="text-red-500" />
              )}
            </Button>

            <Button type="button" onClick={onAddFood} disabled={loading}>
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                "Save changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
