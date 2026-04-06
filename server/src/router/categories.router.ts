import express from "express";
import { getCategories } from "../controller/categories/get-categories";
import { getCategoryById } from "../controller/categories/get-category-by-id";
import { addCategory } from "../controller/categories/add-category";
import { updatedCategory } from "../controller/categories/update-category";
import { deletedCategory } from "../controller/categories/delete-category";
import { authMiddleware } from "../controller/middleware/authMiddleware";

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.post("/", authMiddleware, addCategory);
router.put("/:id", updatedCategory);
router.delete("/:id", deletedCategory);

export default router;
