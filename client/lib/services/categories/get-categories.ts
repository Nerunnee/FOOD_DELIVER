import { Category } from "../../types/categories-types";

type GetCategoriesResponse = {
  categories: Category[];
};

export const getCategories = async () => {
  const response = await fetch(`${process.env.API_URL}/categories`, {
    cache: "no-store",
  });
  const data: GetCategoriesResponse = await response.json();

  return data.categories;
};
