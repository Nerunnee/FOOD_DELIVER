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

export function AddCategory() {
  const [open, setOpen] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (
    event,
  ) => {
    setCategoryName(event.target.value);
  };

  const onAddCategory = async () => {
    setLoading(true);
    const postBody = {
      name: categoryName,
    };

    try {
      await fetch("http://localhost:4000/categories", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ADMINJWT}`,
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="h-9 w-9 bg-red-500 rounded-full flex items-center justify-center text-white">
          <Plus size={16} />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add new category</DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <div className="grid flex-1 gap-2">
            <Label>Category name</Label>
            <Input
              type="text"
              placeholder="Type category name..."
              onChange={onChange}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-end">
          <Button type="button" onClick={onAddCategory} disabled={loading}>
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              "Add category"
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
