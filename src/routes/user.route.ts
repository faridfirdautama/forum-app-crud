import express from "express";
import UserController from "../controllers/user.controller";

export const userRouter = express.Router();

// 1. Routes
// 2. Forward to controller
userRouter.get("/", UserController.handleGetAllUsers);
userRouter.post("/", UserController.handleCreateUser);
userRouter.patch("/:id", UserController.handleUpdateUser);
userRouter.delete("/:id", UserController.handleDeleteUser);
