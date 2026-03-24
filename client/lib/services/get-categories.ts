import { Category } from "../types/categories-types";

type GetCategoriesResponse = {
  categories: Category[];
};

export const getCategories = async () => {
  const response = await fetch("http://localhost:3000/categories");
  const data: GetCategoriesResponse = await response.json();

  return data.categories;
};
