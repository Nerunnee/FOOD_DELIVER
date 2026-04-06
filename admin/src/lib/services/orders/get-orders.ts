import { GetOrdersResponse } from "@/lib/types/orders-types";

export const getOrders = async () => {
  const response = await fetch(`${process.env.API_URL}/orders`, {
    cache: "no-store",
  });
  const data: GetOrdersResponse = await response.json();

  return data.orders;
};
