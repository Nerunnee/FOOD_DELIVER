export interface GetOrdersResponse {
  orders: Order[];
}

export interface Order {
  id: number;
  userId: number;
  totalPrice: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  foodOrderItems: FoodOrderItem[];
}

export interface User {
  id: number;
  email: string;
  role: string;
  password: string;
  age: number;
  address: string;
  phoneNumber: string;
}

export interface FoodOrderItem {
  id: number;
  quantity: number;
  foodId: number;
  foodOrderId: number;
  createdAt: string;
  updatedAt: string;
  food: Food;
}

export interface Food {
  id: number;
  foodName: string;
  price: string;
  image: string;
  ingredients: string;
  foodCategoryId: number;
  createdAt: string;
  updatedAt: string;
}
