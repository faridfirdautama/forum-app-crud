import express from "express";
import ThreadController from "../controllers/thread.controller";

export const threadRouter = express.Router();
threadRouter.get("/", ThreadController.handleGetAllThreads);
threadRouter.post("/", ThreadController.handleCreateThread);
threadRouter.patch("/:id", ThreadController.handleUpdateThread);
threadRouter.delete("/:id", ThreadController.handleDeleteThread);
