import { GetCategoriesResponse } from "../../types/categories-types";

export const getCategories = async () => {
  const response = await fetch(`http://localhost:4000/categories`);
  const { categories }: GetCategoriesResponse = await response.json();

  return categories;
};
