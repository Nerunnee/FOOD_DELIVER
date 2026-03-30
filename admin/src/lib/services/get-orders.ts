import { GetOrdersResponse } from "../types/orders-types";

export const getOrders = async () => {
  const response = await fetch("http://localhost:3000/orders");
  const data: GetOrdersResponse = await response.json();

  return data.orders;
};
