import express from "express";
import { getUsers } from "../controller/users/get-users";
import { getUserById } from "../controller/users/get-user-by-id";
import { addUser } from "../controller/users/add-user";
import { updatedUser } from "../controller/users/update-user";
import { deletedUser } from "../controller/users/delete-user";
import { login } from "../controller/users/login";
import { authMiddleware } from "../controller/middleware/authMiddleware";
import { adminMiddleware } from "../controller/middleware/adminMiddleware";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", authMiddleware, adminMiddleware, addUser);
router.put("/:id", authMiddleware, adminMiddleware, updatedUser);
router.delete("/:id", authMiddleware, adminMiddleware, deletedUser);
router.post("/login", login);

export default router;
