import express, { Application } from "express";
import usersRouter from "./router/users.router";
import categoriesRouter from "./router/categories.router";
import foodsRouter from "./router/foods.router";
import orderRouter from "./router/orders.router";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// app.use(
//   cors({
//     origin: "https://food-delivery-wy23.onrender.com",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   }),
// );

app.use("/users", usersRouter);
app.use("/categories", categoriesRouter);
app.use("/foods", foodsRouter);
app.use("/orders", orderRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

//API_URL=https://www.google.com
// {process.env.API_URL}/foods
