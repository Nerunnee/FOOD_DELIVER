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
import { CategorySelector } from "../../foods/_components/CategorySelector";

type AddFoodProps = {
  categories: Category[];
  currentCategory: number;
};

export function AddFoodCategory(props: AddFoodProps) {
  const { categories, currentCategory } = props;

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState<{
    foodName: string;
    price: number;
    categoryId: null | number;
    ingredients: string;
    image: string;
  }>({
    foodName: "",
    price: 0,
    categoryId: currentCategory ?? null,
    ingredients: "",
    image: "",
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
      image: food.image,
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
    <div className="rounded-xl flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="flex flex-col items-center gap-6">
          <div>
            <Plus />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {`Add new Dish to ${categories.find((category) => category.id === currentCategory)?.name}`}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6">
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
                <Label>Food Price</Label>
                <Input
                  type="number"
                  placeholder="Enter price..."
                  name="price"
                  onChange={handleChange}
                />
              </div>
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
              />
            </div>

            <div className="grid flex-1 gap-2">
              <Label>Food image</Label>
              <Input
                type="text"
                placeholder="Add food image..."
                name="image"
                onChange={handleChange}
              />
            </div>
          </div>

          <DialogFooter className="sm:justify-end">
            <Button type="button" onClick={onAddFood} disabled={loading}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Add dish"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
