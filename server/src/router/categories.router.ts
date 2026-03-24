import express from "express";
import { getCategories } from "../controller/categories/get-categories";
import { getCategoryById } from "../controller/categories/get-category-by-id";
import { addCategory } from "../controller/categories/add-category";
import { updatedCategory } from "../controller/categories/update-category";
import { deletedCategory } from "../controller/categories/delete-category";
import { authMiddleware } from "../controller/middleware/authMiddleware";
import { adminMiddleware } from "../controller/middleware/adminMiddleware";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", authMiddleware, adminMiddleware, getCategoryById);
router.post("/", authMiddleware, adminMiddleware, addCategory);
router.put("/:id", authMiddleware, adminMiddleware, updatedCategory);
router.delete("/:id", authMiddleware, adminMiddleware, deletedCategory);

export default router;
