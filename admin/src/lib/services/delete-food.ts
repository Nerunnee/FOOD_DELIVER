"use server";

export const onDeleteFood = async (foodId: number) => {
  await fetch(`http://localhost:4000/foods/${foodId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",

      // Authorization: `Bearer ${process.env.ADMINJWT}`,
    },

    cache: "no-store",
  });
};
