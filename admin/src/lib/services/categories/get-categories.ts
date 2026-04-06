import { GetCategoriesResponse } from "../../types/categories-types";

export const getCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/categories`);
  const { categories }: GetCategoriesResponse = await response.json();

  return categories;
};
