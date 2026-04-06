import express from "express";
import { getFoods } from "../controller/foods/get-foods";
import { getFoodById } from "../controller/foods/get-food-by-id";
import { addFood } from "../controller/foods/add-food";
import { updatedFood } from "../controller/foods/update-food";
import { deletedFood } from "../controller/foods/delete-food";
import { authMiddleware } from "../controller/middleware/authMiddleware";

const router = express.Router();

router.get("/", getFoods);
router.get("/:id", getFoodById);
router.post("/", authMiddleware, addFood);
router.put("/:id", authMiddleware, updatedFood);
router.delete("/:id", authMiddleware, deletedFood);

export default router;
