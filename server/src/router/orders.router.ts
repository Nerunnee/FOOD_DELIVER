import express from "express";
import { getOrders } from "../controller/orders/get-orders";
import { getOrderById } from "../controller/orders/get-order-by-id";
import { addOrder } from "../controller/orders/add-order";
import { updatedOrder } from "../controller/orders/update-order";
import { deletedOrder } from "../controller/orders/delete-order";
import { getOrdersUser } from "../controller/orders/get-orders-user";
import { authMiddleware } from "../controller/middleware/authMiddleware";
import { adminMiddleware } from "../controller/middleware/adminMiddleware";

const router = express.Router();

router.get("/", authMiddleware, adminMiddleware, getOrders);
router.get("/", authMiddleware, getOrdersUser);
router.get("/:id", authMiddleware, adminMiddleware, getOrderById);
router.post("/", authMiddleware, adminMiddleware, addOrder);
router.put("/:id", authMiddleware, adminMiddleware, updatedOrder);
router.delete("/:id", authMiddleware, adminMiddleware, deletedOrder);

export default router;
