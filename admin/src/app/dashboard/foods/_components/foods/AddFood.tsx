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

export function AddFood() {
  const [open, setOpen] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [foodPrice, setFoodPrice] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodIngredients, setFoodIngredients] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChangeName: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setFoodName(event.target.value);
    // setFoodPrice(event.target.value);
    // setFoodImage(event.target.value);
    // setFoodIngredients(event.target.value);
    // setCategory(event.target.value);
  };
  const onChangePrice: ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = (event) => {
    setFoodPrice(event.target.value);
  };

  const onAddFood = async () => {
    setLoading(true);
    const postBody = {
      foodName: foodName,
      price: foodPrice,
      image: foodImage,
      ingredients: foodIngredients,
      foodCategoryId: category,
    };

    try {
      await fetch("http://localhost:3000/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${process.env.ADMINJWT}`,
          // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6MiwiZW1haWwiOiJ6dWxhYUBnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4ifSwiaWF0IjoxNzc0NDA4NDQ3LCJleHAiOjE3NzQ0MTIwNDd9.bIxOgxHZG8mWa8Kx9SdsUsGrg8f8NjtAI-JgD1Vp3wU`,
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
          <div className="flex items-center gap-6">
            <div className="grid flex-1 gap-2">
              <Label>Food name</Label>
              <Input
                type="text"
                placeholder="Type food name..."
                onChange={onChangeName}
              />
            </div>
            <div className="grid flex-1 gap-2">
              <Label>Food Price</Label>
              <Input
                type="text"
                placeholder="Enter price..."
                onChange={onChangePrice}
              />
            </div>
          </div>
          {/* <div className="grid flex-1 gap-2">
            <Label>Ingredients</Label>
            <Input
              type="text"
              placeholder="List ingredients..."
              onChange={onChange}
            />
          </div>
          <div className="grid flex-1 gap-2">
            <Label>Food image</Label>
            <Input type="file" onChange={onChange} />
          </div> */}
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
