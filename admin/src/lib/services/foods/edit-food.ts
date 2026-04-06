"use server";

type FoodType = {
  foodName: string;
  price: string;
  ingredients: string;
  foodCategoryId: number;
  image: string;
};

export const onEditFood = async (foodId: number, food: FoodType) => {
  await fetch(`http://localhost:4000/foods/${foodId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
};
