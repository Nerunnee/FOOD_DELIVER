"use server";

export const onDeleteFood = async (foodId: number) => {
  await fetch(`${process.env.API_URL}/foods/${foodId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",

      // Authorization: `Bearer ${process.env.ADMINJWT}`,
    },

    cache: "no-store",
  });
};
