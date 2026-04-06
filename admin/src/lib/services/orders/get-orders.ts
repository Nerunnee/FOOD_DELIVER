import { GetOrdersResponse } from "@/lib/types/orders-types";

export const getOrders = async () => {
  const response = await fetch(`http://localhost:4000/orders`);
  const data: GetOrdersResponse = await response.json();

  return data.orders;
};
